const API_ENDPOINT =
  "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json";
const root = document.getElementById("root");
const todoList = document.createElement("ul");
todoList.style.lineHeight = 2;
root.appendChild(todoList);
let todoElements;

const getTodos = async () => {
  const response = await fetch(API_ENDPOINT);
  const result = await response.json();
  return result;
};

const main = async () => {
  const todos = await getTodos();
  todoElements = todos.map((todo) => {
    const todoText = todo.toUpperCase();
    const todoElement = document.createElement("li");
    todoElement.textContent = todoText;
    return todoElement;
  });
};

const addRandomTodo = () => {
  const randIndex = Math.round(Math.random() * todoElements.length);
  const newTodo = todoElements[randIndex];
  todoList.appendChild(newTodo);
};

main();

document.querySelector("button").addEventListener("click", () => {
  addRandomTodo();
});
