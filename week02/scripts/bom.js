const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // Create a new list item and add it to the list
        const li = document.createElement('li');
        li.textContent = input.value;
        // Create a delete button for the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        // Add an event listener to the delete button to remove the list item when clicked
        deleteButton.addEventListener('click', function () {
            li.remove();
            input.focus();
        });
        li.append(deleteButton);
        list.append(li);
        input.value = '';
    }
    input.focus();
});
