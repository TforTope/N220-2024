let tasks = [];
let loggedInUser = "";
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const feedback = document.getElementById("feedback");
const dashboardSection = document.getElementById("dashboardSection");
const loginSection = document.getElementById("loginSection");
const loggedInUserSpan = document.getElementById("loggedInUser");
const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTaskButton");

loginButton.addEventListener("click", function () {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  let errors = [];
  if (username === "") errors.push("Username cannot be empty.");
  if (password.length < 8)
    errors.push("Password must be at least 8 characters long.");
  if (!/[A-Z]/.test(password))
    errors.push("Password must contain at least one uppercase letter.");
  if (!/\d/.test(password))
    errors.push("Password must contain at least one number.");
  if (password === "") errors.push("Password cannot be empty.");

  if (errors.length > 0) {
    feedback.textContent = errors.join(" ");
  } else {
    loggedInUser = username;
    feedback.textContent = "";
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    loggedInUserSpan.textContent = loggedInUser;
    loadTasks();
  }
});

document.getElementById("logoutButton").addEventListener("click", function () {
  loggedInUser = "";
  loginSection.style.display = "block";
  dashboardSection.style.display = "none";
  usernameInput.value = "";
  passwordInput.value = "";
  feedback.textContent = "";
});

addTaskButton.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    tasks.push({
      text: taskText,
      completed: false,
      category: "",
      owner: loggedInUser,
    });
    newTaskInput.value = "";
    loadTasks();
  }
});

function loadTasks() {
  taskList.innerHTML = "";
  tasks
    .filter((task) => task.owner === loggedInUser)
    .forEach((task, index) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");

      const taskText = document.createElement("h4");
      taskText.textContent = task.category
        ? `${task.text} (${task.category})`
        : task.text;
      if (task.completed) {
        taskText.style.textDecoration = "line-through";
      }
      const completeButton = document.createElement("button");
      completeButton.textContent = task.completed
        ? "Mark Incomplete"
        : "Mark Complete";
      completeButton.addEventListener("click", function () {
        task.completed = !task.completed;
        loadTasks();
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Remove";
      deleteButton.classList.add("red");
      deleteButton.addEventListener("click", function () {
        tasks.splice(index, 1);
        loadTasks();
      });

      const changeTextButton = document.createElement("button");
      changeTextButton.textContent = "Change Text";
      changeTextButton.classList.add("blue");
      changeTextButton.addEventListener("click", function () {
        const newText = prompt("Enter new text for the task:", task.text);
        if (newText !== null) {
          task.text = newText;
          loadTasks();
        }
      });
      const categoryDropdown = document.createElement("select");
      const categories = ["Choose Category", "Indoor", "Outdoor"];
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        if (category === task.category) option.selected = true;
        categoryDropdown.appendChild(option);
      });

      categoryDropdown.addEventListener("change", function () {
        task.category =
          categoryDropdown.value !== "Choose Category"
            ? categoryDropdown.value
            : "";
        loadTasks();
      });
      const taskActions = document.createElement("div");
      taskActions.classList.add("task-actions");
      taskActions.appendChild(changeTextButton);
      taskActions.appendChild(deleteButton);
      taskActions.appendChild(categoryDropdown);

      taskElement.appendChild(taskText);
      taskElement.appendChild(completeButton);
      taskElement.appendChild(taskActions);
      taskList.appendChild(taskElement);
    });
}
