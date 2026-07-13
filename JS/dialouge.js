// Dialog options
const dialogLines = {
    Buy: "wip",
    Sell: "wip",
    Talk: "wip",
    Exit: "wip"
};

function selectOption(option) {
    const dialogBox = document.getElementById("dialog-text");

    // Smooth text change
    dialogBox.textContent = "";
    let text = dialogLines[option];
    let i = 0;

    // Typewriter effect
    let interval = setInterval(() => {
        dialogBox.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 40);
}
