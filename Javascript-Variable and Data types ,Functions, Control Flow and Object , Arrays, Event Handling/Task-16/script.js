
// Array to store to-do items
let todoList = [];

// Function to add item to the list
function addItem() {
    const todoInput = document.getElementById('todo-input');
    const itemText = todoInput.value.trim();

    if (itemText !== '') {
        todoList.push(itemText);
        todoInput.value = ''; // Clear input field

        renderList();
    }
}

// Function to render the to-do list
function renderList() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear previous list items

    todoList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${item}`;
        todoListElement.appendChild(listItem);
    });
}

// Event handling for Enter key press
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
