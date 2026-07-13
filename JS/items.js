const shopData = {
    items: [
        { name: "Revive Mint", price: 100, desc: "Revives a fallen ally." },
        { name: "Darkburger", price: 50, desc: "Heals 70 HP." }
    ],
    dialogue: {
        greeting: "Welcome, welcome! Looking to buy some wares?",
        sold: "Thank you! Come again."
    }
};

//  UI switching
function openMenu(menuType) {
    const dialogBox = document.getElementById('dialog-box');
    if (menuType === 'TALK') {
        dialogBox.innerText = "The weather is looking rather dark today, isn't it?";
    } else if (menuType === 'BUY') {
        // Build the Buy grid
    }
}
