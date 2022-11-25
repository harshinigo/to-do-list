let openToDo = document.querySelector("#openToDo");
let toDoList = document.querySelector("#toDoList");
let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

$(document).ready(function () {
  $("#openToDo ").click(function () {
    $("#toDoList").show();
  });
  $("#hide").click(function () {
    $("#toDoList").fadeOut();
  });
});
