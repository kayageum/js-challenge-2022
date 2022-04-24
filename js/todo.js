const TODOS_KEY = "todos";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function removeTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function showTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "⨉ ";
  button.className = "removeButton";
  button.addEventListener("click", removeTodo);
  li.appendChild(button);
  li.appendChild(span);
  span.innerText = newTodoObj.text;
  todoList.appendChild(li);
}
function handleTodoInput(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  showTodo(newTodoObj);
  saveTodos();
  //   localStorage.setItem(todoInput.value);
}

todoForm.addEventListener("submit", handleTodoInput);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  toDos = parseTodos;
  parseTodos.forEach(showTodo);
}
