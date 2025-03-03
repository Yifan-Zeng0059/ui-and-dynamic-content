// Save the reference to text-field into a variable.
let itemInput = document.getElementById('item-input');

// Save the reference to new-item button into a variable.
let addItemBtn = document.getElementById('add-item-btn');

// Save the reference to unordered or ordered list into a variable.
let itemList = document.getElementById('item-list');

// Save the reference to paragraph for feedback.
let feedback = document.querySelector('.feedback');

// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    let listItem = document.createElement('li');

    // Check if user entered the value in input text-field.
    if (itemInput.value.trim() !== '') {
        listItem.textContent = itemInput.value;

        itemList.appendChild(listItem);

        feedback.textContent = '';

        itemInput.value = '';

        itemInput.focus();
    } else {
        feedback.textContent = 'Nothing entered!';
    }
}

// Register your function addItem for click event on button.
addItemBtn.addEventListener('click', addItem);
