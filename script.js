//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList = document.querySelector('.pokemon-container');

//Event Listeners
todoButton.addEventListener('click', addtodo);
todoList.addEventListener('click', deleteInput);

//Fuctions
function addtodo(event) {
    // Prevents form submitting
    event.preventDefault();
    //Create Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete!';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //Append to ul
    todoList.appendChild(todoDiv);
    //clear text input
    todoInput.value = "";
}

function deleteInput(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add("delete-btn-animation");
        todo.remove();
        
    }
}