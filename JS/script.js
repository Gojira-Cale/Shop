let gold = 100;
let inventory = [];

// Shopkeeper sprite states
const shopkeeperSprites = {
    idle: "assests/shop/me/idle-sprite.gif",
    talk: "assests/shop/me/talk-sprite-1.gif",
    laughing: "assests/shop/me/laughing-sprite-1.gif",
    confused: "assests/shop/me/confused-sprite-1.gif"
};

function updateGold() {
    document.getElementById("gold-amount").textContent = gold;
}

function changeShopkeeper(state) {
    document.getElementById("shopkeeper-img").src = shopkeeperSprites[state] || shopkeeperSprites.idle;
}

function setDialog(text, spriteState = "talk") {
    const dialogBox = document.getElementById("dialog-text");
    dialogBox.textContent = "";
    changeShopkeeper(spriteState);
    let i = 0;
    let interval = setInterval(() => {
        dialogBox.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            changeShopkeeper("idle");
        }
    }, 30);
}

function openBuyMenu() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("buy-menu").classList.remove("hidden");
    setDialog("Here's what I have for sale...", "talk");
}

function openSellMenu() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("sell-menu").classList.remove("hidden");
    updateInventoryList();
    setDialog("What are you offering?", "talk");
}

function backToMain() {
    document.getElementById("buy-menu").classList.add("hidden");
    document.getElementById("sell-menu").classList.add("hidden");
    document.getElementById("main-menu").classList.remove("hidden");
    setDialog("Welcome back! What will it be?", "talk");
}

function buyItem(item, price) {
    if (gold >= price) {
        gold -= price;
        inventory.push(item);
        updateGold();
        setDialog(`You bought a ${item}!`, "talk");
    } else {
        setDialog("Not enough gold!", "laughing");
    }
}

function sellItem(index) {
    let item = inventory[index];
    let sellPrice = Math.floor(getItem
