// 1. Define your Shopkeeper's dialogue data
const SHOP_DIALOGUE = {
    welcome: [
		      "Welcome Welcome!",
		      "Nice to see ya here."
		]
		
    buy_item: [ 
	"Not added yet !",
			   ]
	
    no_money: [ 
		"Sorry, ya aint got enough cash.",
			   ]
	
    talk_lore: [
		"Not added yet [delay:300] !",
		]
	
    exit: ["Bye bye !"
		   ]
};

const dialogueState = {
    textElement: document.getElementById('dialogue-text'),
    nextIndicator: document.getElementById('next-page-indicator'),
    
    currentStoryPages: [], // Holds the active array of strings
    currentPageIndex: 0,   // Tracks which page we are on
    currentText: "",       // Text of the current page
    currentIndex: 0,       // Character index within the page
    
    typingSpeed: 30,
    isTyping: false,
    timeoutId: null,
    audioCtx: null
};


function playTextBlip() {
    try {
        if (!dialogueState.audioCtx) {
            dialogueState.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const ctx = dialogueState.audioCtx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'square'; 
        osc.frequency.setValueAtTime(130 + Math.random() * 15, ctx.currentTime); 
        
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
}


function startDialogueSequence(conversationKey) {
    const sequence = SHOP_DIALOGUE[conversationKey];
    if (!sequence) return;

    dialogueState.currentStoryPages = sequence;
    dialogueState.currentPageIndex = 0;
    
    
    dialogueState.nextIndicator.style.visibility = "hidden"; 
    
    displayPage(dialogueState.currentPageIndex);
}
// Prepares and starts typing a specific page from the sequence
function displayPage(pageIndex) {
    clearTimeout(dialogueState.timeoutId);
    
    dialogueState.currentText = dialogueState.currentStoryPages[pageIndex];
    dialogueState.currentIndex = 0;
    dialogueState.isTyping = true;
    dialogueState.textElement.innerHTML = "";
    dialogueState.nextIndicator.style.visibility = "hidden";
    
    typeNextChar();
}

function typeNextChar() {
    if (dialogueState.currentIndex >= dialogueState.currentText.length) {
        dialogueState.isTyping = false;
        // Show the blinking indicator once the current page finishes typing
        dialogueState.nextIndicator.style.visibility = "visible";
        return;
    }

    let remainingText = dialogueState.currentText.slice(dialogueState.currentIndex);
    let currentSpeed = dialogueState.typingSpeed;

    if (remainingText.startsWith("[delay:")) {
        const closeBracket = remainingText.indexOf("]");
        const delayAmount = parseInt(remainingText.substring(7, closeBracket), 10);
        dialogueState.currentIndex += closeBracket + 1; 
        dialogueState.timeoutId = setTimeout(typeNextChar, delayAmount);
        return;
    }

    const char = dialogueState.currentText[dialogueState.currentIndex];
    dialogueState.textElement.innerHTML += char;
    dialogueState.currentIndex++;

    if (char !== " ") playTextBlip();

    if (char === "." || char === "?" || char === "!") {
        currentSpeed = dialogueState.typingSpeed * 8;
    } else if (char === ",") {
        currentSpeed = dialogueState.typingSpeed * 4;
    }

    dialogueState.timeoutId = setTimeout(typeNextChar, currentSpeed);
}

// Master click handler bound to the text box
function handleBoxClick() {
    // State 1: Page is actively typing -> Skip to the end of this page
    if (dialogueState.isTyping) {
        clearTimeout(dialogueState.timeoutId);
        let cleanText = dialogueState.currentText.replace(/\[delay:\d+\]/g, "");
        dialogueState.textElement.innerHTML = cleanText;
        dialogueState.isTyping = false;
        dialogueState.nextIndicator.style.visibility = "visible";
        return;
    }

    // State 2: Page finished, and there are more pages left -> Advance page
    if (dialogueState.currentPageIndex < dialogueState.currentStoryPages.length - 1) {
        dialogueState.currentPageIndex++;
        displayPage(dialogueState.currentPageIndex);
        return;
    }

    // State 3: Last page finished -> Clear/Close dialogue box layout
    dialogueState.nextIndicator.style.visibility = "hidden";
    dialogueState.textElement.innerHTML = "<em>Conversation ended.</em>";
}
