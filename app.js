// ========================
// Variables
// ========================
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const addTaskBtn = document.querySelector(".btn__task");
// ========================
// Functions
// ========================
function entryStructure(todo) {
  return `<li><input type="checkbox" />${todo} <span class="delete opacity"></span></li>`;
}

function createEntry(todo) {
  todoList.innerHTML += entryStructure(todo);
}
// ========================
// Events
// ========================

addTaskBtn.addEventListener("click", (e) => {
  if (todoInput.value == "") return; // Guard
  createEntry(todoInput.value);
  todoInput.value = "";
  todoInput.focus();
});

todoList.addEventListener("click", (e) => {
  if (e.target.closest("input")) {
    e.target.parentNode.classList.toggle("done");
    e.target.parentNode.classList.toggle("transparent");
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.closest("span")) e.target.parentNode.remove();
});
