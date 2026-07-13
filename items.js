const items = [
    { name: "N/A", price: 000, desc: "Restores 0 HP." },
    { name: "N/A", price: 000, desc: "Restores 0 HP." }
];

const dialogueBox = document.getElementById('dialogue-text').querySelector('p');
const itemList = document.getElementById('item-list');
const menuButtons = document.querySelectorAll('.menu-btn');

menuButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const action = e.target.textContent;
        handleAction(action);
    });
});

function handleAction(action) {
    if (action === "BUY") {
        itemList.classList.remove('hidden');
        renderItems();
        dialogueBox.textContent = "What are you buying, kid?";
    } else {
        itemList.classList.add('hidden');
        if (action === "TALK") {
            dialogueBox.textContent = "It's a lovely day to be stuck in this dark world.";
        } else if (action === "EXIT") {
            dialogueBox.textContent = "Come back when you need more!";
        }
    }
}

function renderItems() {
    itemList.innerHTML = '<h3>ITEMS</h3>';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'shop-item';
        itemDiv.innerHTML = `<span class="item-name">${item.name}</span> <span class="item-price">${item.price} D$</span>`;
        itemDiv.addEventListener('click', () => buyItem(item));
        itemList.appendChild(itemDiv);
    });
}

function buyItem(item) {
    dialogueBox.textContent = `You bought the ${item.name}! (Not actually coded to deduct money yet!)`;
}