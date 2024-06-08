let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;

    var editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit-button-styling');
    
    var toDoItemContainer = document.createElement('div');
    toDoItemContainer.classList.add('to-do-item-container');
    toDoItemContainer.appendChild(paragraph);
    toDoItemContainer.appendChild(editButton);

    toDoContainer.appendChild(toDoItemContainer);

    inputField.value = "";

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(toDoItemContainer);
    });

    editButton.addEventListener('click', function() {
        let newText = prompt("Edit your to-do item:", paragraph.innerText);
        if (newText !== null && newText.trim() !== "") {
            paragraph.innerText = newText;
        }
    });
});











