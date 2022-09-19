const toDoForm=document.getElementById("todo-form");
const toDoList=document.getElementById("todo-list");
const toDoInput=document.querySelector("#todo-form input");

let toDos=[];
const TODOS__KEYS="todos";

function saveToDos() {
    localStorage.setItem(TODOS__KEYS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    toDos=toDos.filter(item => parseInt(li.id) !== item.id);
    li.remove();
    saveToDos();
}

function paintToDo(newToDoObject){
    const li=document.createElement("li");
    li.id=newToDoObject.id;
    const span=document.createElement("span");
    span.innerText=newToDoObject.text;
    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObject= {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos(newToDo);
}
toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos=localStorage.getItem(TODOS__KEYS);

if(savedToDos) {
    const parsedToDos= JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos=parsedToDos;
} 



