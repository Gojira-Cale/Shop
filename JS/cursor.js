// Spatial grid coordinates mapping [Row, Column]
const MENU_COORDINATES = [
    { row: 0, col: 0 }, // Index 0: Buy
    { row: 0, col: 1 }, // Index 1: Sell
    { row: 1, col: 0 }, // Index 2: Talk
    { row: 1, col: 1 }  // Index 3: Exit
];

const menuState = {
    currentIndex: 0,
    items: document.querySelectorAll('.menu-item'),
    cursor: document.getElementById('soul-cursor'),
    gridContainer: document.getElementById('shop-menu-grid')
};

// Align the red soul cursor cleanly next to the selected item text block
function updateCursorPosition() {
    const activeItem = menuState.items[menuState.currentIndex];
    
    // Clear old visual highlights
    menuState.items.forEach(item => item.classList.remove('active'));
    activeItem.classList.add('active');

    // Get position offsets relative to the menu grid frame
    const itemRect = activeItem.getBoundingClientRect();
    const gridRect = menuState.gridContainer.getBoundingClientRect();

    const targetTop = itemRect.top - gridRect.top + (itemRect.height / 2) - 12;
    const targetLeft = itemRect.left - gridRect.left - 30; // Position 30px to the left of the item text

    // Snap cursor smoothly
    menuState.cursor.style.top = `${targetTop}px`;
    menuState.cursor.style.left = `${targetLeft}px`;
}

// Map spatial moves based on arrow key directions
function handleNavigation(direction) {
    let currentCoords = MENU_COORDINATES[menuState.currentIndex];
    let targetRow = currentCoords.row;
    let targetCol = currentCoords.col;

    if (direction === 'ArrowUp') targetRow = Math.max(0, targetRow - 1);
    if (direction === 'ArrowDown') targetRow = Math.min(1, targetRow + 1);
    if (direction === 'ArrowLeft') targetCol = Math.max(0, targetCol - 1);
    if (direction === 'ArrowRight') targetCol = Math.min(1, targetCol + 1);

    // Find the item index that matches the new coordinates
    const nextIndex = MENU_COORDINATES.findIndex(c => c.row === targetRow && c.col === targetCol);
    
    if (nextIndex !== -1 && nextIndex !== menuState.currentIndex) {
        menuState.currentIndex = nextIndex;
        updateCursorPosition();
        playCursorSound(); // Trigger your text blip or a custom menu click audio
    }
}

// Handle selections (Z Key / Enter)
function selectMenuItem() {
    const activeItem = menuState.items[menuState.currentIndex];
    const action = activeItem.getAttribute('data-action');
    
    // Integrate directly with your previous dialogue engine scripts
    if (action === 'buy') {
        startDialogueSequence(['Opening the buy ledger... [delay:200]\nWhat catches your eye?']);
    } else if (action === 'sell') {
        startDialogueSequence(['I do not have a need for trash right now.']);
    } else if (action === 'talk') {
        startDialogueSequence(['You want to chat? [delay:300]\nBusiness must be slow.']);
    } else if (action === 'exit') {
        startDialogueSequence(['Come back soon...']);
    }
}
// Simple procedural sound for cursor movement
function playCursorSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(250, audioCtx.currentTime); // Quick crisp click pitch
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.03);
    } catch(e){}
}

// Keyboard Event Listener Setup
window.addEventListener('keydown', (e) => {
    // Intercept navigation
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault(); // Stop window from scrolling
        handleNavigation(e.key);
    }
    
    // Z key or Enter to select
    if (e.key.toLowerCase() === 'z' || e.key === 'Enter') {
        selectMenuItem();
    }

    // X key or Shift to back out/skip dialogue text
    if (e.key.toLowerCase() === 'x' || e.key === 'Shift') {
        if (typeof handleBoxClick === "function") {
            handleBoxClick(); // Links up to text skip/page advances
        }
    }
});

// Mouse hover integration to keep mouse interactions functional alongside keyboard
menuState.items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        menuState.currentIndex = parseInt(item.getAttribute('data-index'), 10);
        updateCursorPosition();
    });
    item.addEventListener('click', () => {
        selectMenuItem();
    });
});

// Initial boot placement run
updateCursorPosition();