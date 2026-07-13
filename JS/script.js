let gold = 100;

const shopkeeperSprites = {
    idle: "images/shop_idle.png",
    happy: "images/shop_happy.png",
    talk: "images/shop_talk.png",
    angry: "images/shop_angry.png"
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
            setDialog("Here's what I have for sale...", "happy");
        } else if (action === "sell") {
            setDialog("What are you offering?", "talk");
        } else if (action === "talk") {
            setDialog("This town has seen better days...", "talk");
        } else if (action === "exit") {
            setDialog("Come again soon!", "idle");
        }
    });
});

updateGold();
