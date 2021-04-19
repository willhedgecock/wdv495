let toDoInput = document.querySelector('.todo-input'); 
let toDoButton = document.querySelector('.todo-button');
let toDoList = document.querySelector('.todo-list');
let filterOption = document.querySelector('.filter-todo');

toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

function addToDo(inEvent) {

    inEvent.preventDefault(); //Prevent form from submitting

    let toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');

    let newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);

    //ADD BUTTONS

    let completedButton = document.createElement('button');
    completedButton.innerHTML = "DONE";
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);

    let trashButton = document.createElement('button');
    trashButton.innerHTML = "DELETE";
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);

    toDoList.appendChild(toDoDiv);

    toDoInput.value = "";
}

function deleteCheck(inEvent) {

    let item = inEvent.target;

    if(item.classList[0] === 'trash-btn') {
        let todo = item.parentElement;
        todo.classList.add('deleteAnimate');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    if(item.classList[0] === 'complete-btn') {
        let todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterToDo(inEvent) {
    let todos = toDoList.childNodes;
    todos.forEach(function(todo) {

        switch (inEvent.target.value) {
            case "all":
                todo.style.display = "flex";
            break;

            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;

            case "incomplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;
        }
    });
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/pwa/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }