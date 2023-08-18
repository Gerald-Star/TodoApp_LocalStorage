// set a DOM element using queryselector

var form = document.querySelector("form");
var input = document.getElementById("user-todo");
var todoList = document.querySelector("ul");
var button = document.querySelector("button");

// set the addEventListener function to be called to submit the form
//set the default function to be called to avoid submitting back to the server
//set the input.value for the unordered list element
//set the input.value to be empty

form.addEventListener("submit", function (e) {
  e.preventDefault();
  todoMaker(input.value);
  input.value = "";
});

// second Step
// create a todoList function to create a lists element using createElement.
// set the textContent for the list element, set appendChild to the list
var todoMaker = function (text) {
  var todo = document.createElement("li");
  todo.textContent = text;
  todoList.appendChild(todo);
};

//third step
// attach an eventListener to the button element using click event
// using the while function to set the firstChild.
// use the removeChild function to remove the li using the firstChild function

button.addEventListener("click", function () {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});
