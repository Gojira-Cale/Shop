let gold = 100;
let inventory = [];

// Update gold display
function updateGold() {
    document.getElementById("gold-amount").textContent = gold;
}

// Typewriter effect for dialog
function setDialog(text) {
    const dialogBox = document.getElementById("dialog-text");
    dialogBox.textContent = "";
    let i = 0;
    let interval = setInterval(() => {
        dialogBox.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 30);
}

// Menu navigation
function openBuyMenu() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("buy-menu").classList.remove("hidden");
    setDialog("Here's what I have for sale...");
}

function openSellMenu() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("sell-menu").classList.remove("hidden");
    updateInventoryList();
    setDialog("What are you offering?");
}

function backToMain() {
    document.getElementById("buy-menu").classList.add("hidden");
    document.getElementById("sell-menu").classList.add("hidden");
    document.getElementById("main-menu").classList.remove("hidden");
    setDialog("Welcome back! What will it be?");
}

// Buying items
function buyItem(item, price) {
    if (gold >= price) {
        gold -= price;
        inventory.push(item);
        updateGold();
        setDialog(`You bought a ${item}!`);
    } else {
        setDialog("Not enough gold!");
    }
}

// Selling items
function sellItem(index) {
    let item = inventory[index];
    let sellPrice = Math.floor(getItemPrice(item) / 2);
    gold += sellPrice;
    inventory.splice(index, 1);
    updateGold();
    updateInventoryList();
    setDialog(`You sold your ${item} for ${sellPrice}G.`);
}

// Get item price
function getItemPrice(item) {
    const prices = { Potion: 20, Elixir: 50, Sword: 80 };
    return prices[item] || 10;
}

// Update inventory list in Sell menu
function updateInventoryList() {
    const list = document.getElementById("inventory-list");
    list.innerHTML = "";
    if (inventory.length === 0) {
        list.innerHTML = "<div>(No items)</div>";
    } else {
        inventory.forEach((item, index) => {
            let div = document.createElement("div");
            div.className = "item";
            div.textContent = `${item} - Sell for ${Math.floor(getItemPrice(item) / 2)}G`;
            div.onclick = () => sellItem(index);
            list.appendChild(div);
        });
    }
}

// Talk option
function talk() {
    const lines = [
        "This town has seen better days...",
        "Adventurers like you keep me in business.",
        "Stay safe out there."
    ];
    let randomLine = lines[Math.floor(Math.random() * lines.length)];
    setDialog(randomLine);
}

// Exit shop
function exitShop() {
    setDialog("Come again soon!");
}

// Initialize
updateGold();
