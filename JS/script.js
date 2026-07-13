let gold = 100;
let inventory = [];

const shopkeeperSprites = {
    idle: "assests/shop/me/idle-sprite.gif",
    talking: "assests/shop/me/talk-sprite-1.gif",
    laughing: "assests/shop/me/laughing-sprite-1.gif",
    confused: "assests/shop/me/confused-sprite-1.gif"
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

function setDialog(text, sprite = "talking") {
    const dialogBox = document.getElementById("talk-sprite");
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
    showMenu("menu-buy");
    setDialog("Here's what I have for sale...", "talking");
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
    showMenu("menu-sell");
    setDialog("What are you offering?", "talking");
    updateSellList();
}

function updateSellList() {
    const list = document.getElementById("sell-list");
    list.innerHTML = "";
    if (inventory.length === 0) {
        list.innerHTML = "<div class='item'>(No items)</div>";
    } else {
        inventory.forEach((item, index) => {
            let div = document.createElement("div");
            div.className = "item";
            div.textContent = `${item.name} - Sell for ${Math.floor(item.price / 2)}G`;
            div.onclick = () => sellItem(index);
            list.appendChild(div);
        });
    }
}

function buyItem(item) {
    if (gold >= item.price) {
        gold -= item.price;
        inventory.push(item);
        updateGold();
        setDialog(`You bought a ${item.name}!`, "idle");
    } else {
        setDialog("Not enough gold!", "confused");
    }
}

function sellItem(index) {
    let item = inventory[index];
    let sellPrice = Math.floor(item.price / 2);
    gold += sellPrice;
    inventory.splice(index, 1);
    updateGold();
    updateSellList();
    setDialog(`You sold your ${item.name} for ${sellPrice}G.`, "idle");
}

document.querySelectorAll(".menu-option").forEach(opt => {
    opt.addEventListener("click", () => {
        const action = opt.dataset.action;
        if (action === "buy") {
            setDialog("Here's what I have for sale...", "talking");
        } else if (action === "sell") {
            setDialog("What are you offering?", "talking");
        } else if (action === "talk") {
            setDialog("This town has seen better days...", "talking");
        } else if (action === "exit") {
            setDialog("Come again soon!", "laughing");
        }
    });
});

updateGold();
