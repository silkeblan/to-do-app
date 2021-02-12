let textInput = document.querySelector("#text-input");
let inputForm = document.querySelector("#input-form");
let newTask = textInput.value
let toDoListElement = document.querySelector("#to-do-list");
let deleteButtons = document.querySelectorAll(".delete-button");
let checkboxes = document.querySelectorAll(".form-check-input");

function createNewListElement(newTask) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let taskItem = document.createElement("label");
  let editButton = document.createElement("i");
  let deleteButton = document.createElement("i");

  listItem.className = "list-item row";
  checkBox.type = "checkbox";
  checkBox.className = "form-check-input col-1";
  taskItem.className = "col-9";
  taskItem.innerText = newTask;
  editButton.className = "pencil col-1 fas fa-pencil-alt";
  deleteButton.className = "delete-button far fa-times-circle col-1";

  listItem.appendChild(checkBox);
  listItem.appendChild(taskItem);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

function deleteTask() {
  let listItem = this.parentNode;
  toDoListElement.removeChild(listItem);
}

function checkTask() {
  let listItem = this.parentNode;
  if (listItem.matches(".checked")) {
    listItem.classList.remove("checked")
  } else {
    listItem.classList.add("checked");
  }
}

function setNewTask(event) {
  newTask = event.target.value;
}

function handleSubmit(event) {
  event.preventDefault();
  if (newTask === "") {
    alert ("Enter a task!")
  } else {
    let newLi = createNewListElement(newTask);
    toDoListElement.appendChild(newLi);
    textInput.value = "";
    newTask = "";
    deleteButtons = document.querySelectorAll(".delete-button")
    deleteButtons.forEach(item => item.addEventListener("click", deleteTask));
    checkboxes = document.querySelectorAll(".form-check-input");
    checkboxes.forEach(item => item.addEventListener("change", checkTask));
  }
}

textInput.addEventListener("change", setNewTask);
inputForm.addEventListener("submit", handleSubmit);
deleteButtons.forEach(item => item.addEventListener("click", deleteTask));
checkboxes.forEach(item => item.addEventListener("change", checkTask));
