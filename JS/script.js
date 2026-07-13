let gold = 100;

const shopkeeperSprites = {
    idle: "assests/shop/me/idle-sprite.gif",
    talking: "assests/shop/me/talk-sprite-1.gif",
    laughing: "assests/shop/me/laughing-sprite-1.gif",
    confused: "assests/shop/me/confused-sprite-1.gif"
};

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
