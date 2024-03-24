// JavaScript code for TODO List App
document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("todoInput");
  const addButton = document.getElementById("button-addon2");
  const todoList = document.getElementById("todoList");
  const todos = [];

  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "mt-2");
      li.innerHTML = `
        <span>${todo}</span>
        <div>
          <button class="edit btn btn-outline-warning btn-sm" data-index="${index}">Edit</button>
          <button class="delete btn btn-outline-danger btn-sm" data-index="${index}">Delete</button>
        </div>`;
      todoList.appendChild(li);
    });
  }

  function addTodo() {
    const todoText = input.value.trim();
    if (todoText !== "") {
      todos.push(todoText);
      renderTodos();
      input.value = "";
    }
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
  }

  function editTodo(index, newValue) {
    if (newValue !== null && newValue.trim() !== "") {
      todos[index] = newValue.trim();
      renderTodos();
    }
  }

  addButton.addEventListener("click", addTodo);

  todoList.addEventListener("click", function(event) {
    const target = event.target;
    if (target.classList.contains("delete")) {
      const index = parseInt(target.getAttribute("data-index"));
      deleteTodo(index);
    } else if (target.classList.contains("edit")) {
      const index = parseInt(target.getAttribute("data-index"));
      const newValue = prompt("Enter new value", todos[index]);
      editTodo(index, newValue);
    }
  });

  renderTodos();
});