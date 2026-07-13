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

// 2. Setup the configuration state
const dialogueState = {
    textElement: document.getElementById('dialogue-text'), // Target HTML container
    currentText: "",
    currentIndex: 0,
    typingSpeed: 30, // Milliseconds per character
    isTyping: false,
    timeoutId: null,
    audioCtx: null // For procedural audio blips
};

// 3. Procedural Chiptune Audio Blip (No asset files needed!)
function playTextBlip() {
    try {
        // Initialize AudioContext on first user interaction
        if (!dialogueState.audioCtx) {
            dialogueState.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
		const ctx = dialogueState.audioCtx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        // square or retro waves for text
        osc.type = 'square'; 
        // Slight randomization
        osc.frequency.setValueAtTime(120 + Math.random() * 20, ctx.currentTime); 
        
        gain.gain.setValueAtTime(0.05, ctx.currentTime); // Keep volume low
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05); // Snap fadeout
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
        console.log("Audio not allowed yet. Click the page first.");
    }
}

// 4. Core Dialogue Typer Engine
function startDialogue(textKey) {
    // Clear any active typing loops
    clearTimeout(dialogueState.timeoutId);
    
    dialogueState.currentText = SHOP_DIALOGUE[textKey] || textKey;
    dialogueState.currentIndex = 0;
    dialogueState.isTyping = true;
    dialogueState.textElement.innerHTML = ""; // Clear box
    
    typeNextChar();
}

function typeNextChar() {
    if (dialogueState.currentIndex >= dialogueState.currentText.length) {
        dialogueState.isTyping = false;
        return; // Text completed
    }

    let remainingText = dialogueState.currentText.slice(dialogueState.currentIndex);
    let currentSpeed = dialogueState.typingSpeed;

    // Check for inline command tags like [delay:500]
    if (remainingText.startsWith("[delay:")) {
        const closeBracket = remainingText.indexOf("]");
        const delayAmount = parseInt(remainingText.substring(7, closeBracket), 10);
        
        // Advance index past the tag entirely
        dialogueState.currentIndex += closeBracket + 1; 
        
        // Pause typing loop for the delay duration
        dialogueState.timeoutId = setTimeout(typeNextChar, delayAmount);
        return;
    }

    // Grab the next regular character
    const char = dialogueState.currentText[dialogueState.currentIndex];
    dialogueState.textElement.innerHTML += char;
    dialogueState.currentIndex++;

    // Only play audio for letters/numbers, skip spaces
    if (char !== " ") {
        playTextBlip();
    }

    // Add extra pause mechanics for natural punctuation reading
    if (char === "." || char === "?" || char === "!") {
        currentSpeed = dialogueState.typingSpeed * 8; // Dramatic pause at end of sentence
    } else if (char === ",") {
        currentSpeed = dialogueState.typingSpeed * 4; // Slight breath at a comma
    }

    dialogueState.timeoutId = setTimeout(typeNextChar, currentSpeed);
}

// 5. Instantly finish dialogue if the user presses 'Z' or Clicks 
function skipDialogue() {
    if (!dialogueState.isTyping) return;
    
    clearTimeout(dialogueState.timeoutId);
    // Strip out delay tags for the instant reveal
    let cleanText = dialogueState.currentText.replace(/\[delay:\d+\]/g, "");
    dialogueState.textElement.innerHTML = cleanText;
    dialogueState.isTyping = false;
}
