let gold = 100;
let state = "main"; // main, buy, sell, talk
let dialogQueue = [];
let shopkeeper = document.getElementById("shopkeeper");
let dialogText = document.getElementById("dialog-text");
let goldAmount = document.getElementById("gold-amount");

function setDialog(text, sprite = "assests/shop/me/idle-sprite.gif") {
    shopkeeper.src = sprite;
    dialogText.textContent = "";
    let i = 0;
    let interval = setInterval(() => {
        dialogText.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 20);
}

function changeState(newState) {
    state = newState;
    if (state === "buy") {
        setDialog("Here's what I have for sale...", "assests/shop/me/talk-sprite-1.gif");
    } else if (state === "sell") {
        setDialog("What are you offering?", "assests/shop/me/talk-sprite-1.gif");
    } else if (state === "talk") {
        setDialog("This town has seen better days...", "assests/shop/me/talk-sprite-1.gif");
    } else if (state === "exit") {
        setDialog("Come again soon!", "assests/shop/me/idle-sprite.gif");
    }
}

document.querySelectorAll(".menu-option").forEach(opt => {
    opt.addEventListener("click", () => {
        changeState(opt.dataset.action);
    });
});

function updateGold() {
    goldAmount.textContent = gold;
}

updateGold();
setDialog("Welcome!", "assests/shop/me/idle-sprite.gif");
