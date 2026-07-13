let gold = 100;
let inventory = [];
let state = "main";

const shopkeeperSprites = {
    idle: "images/shop_idle.png",
    happy: "images/shop_happy.png",
    talk: "images/shop_talk.png",
    angry: "images/shop_angry.png"
};

const itemsForSale = [
    { name: "Potion", price: 20 },
    { name: "Elixir", price: 50 },
    { name: "Sword", price: 80 },
    { name: "Shield", price: 60 }
];

function updateGold() {
    document.getElementById("gold-amount").textContent = gold;
}

function changeShopkeeper(state) {
    document.getElementById("shopkeeper").src = shopkeeperSprites[state] || shopkeeperSprites.idle;
}

function setDialog(text, sprite = "talk") {
    const dialogBox = document.getElementById("dialog-text");
    dialogBox.textContent = "";
    changeShopkeeper(sprite);
    let i = 0;
    let interval = setInterval(() => {
        dialogBox.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            changeShopkeeper("idle");
        }
    }, 20);
}

function showMenu(menuId) {
    document.querySelectorAll(".menu").forEach(m => m.classList.add("hidden"));
    document.getElementById(menuId).classList.remove("hidden");
}

function openBuyMenu() {
    state = "buy";
    showMenu("menu-buy");
    setDialog("Here's what I have for sale...", "happy");
    const list = document.getElementById("buy-list");
    list.innerHTML = "";
    itemsForSale.forEach(item => {
        let div = document.createElement("div");
        div.className = "item";
        div.textContent = `${item.name} - ${item.price}G`;
        div.onclick = () => buyItem(item);
        list.appendChild(div);
    });
}

function openSellMenu() {
    state = "sell";
    showMenu("menu
