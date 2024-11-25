Final Project
Github Link
https://github.com/TforTope/N220-2024/tree/main/final-project
Major Features
Login Form
DOM References:
usernameInput: References the username input field using document.getElementById("username")
passwordInput: References the password input field using document.getElementById("password")
loginButton: References the login button using document.getElementById("loginButton")
Logic
Check if the username field is empty:
javascript
Copy code
if (usernameInput.value === "") {
  alert("Please enter a username.");
}

Validate the password:
Ensure it is at least 8 characters:
javascript
Copy code
if (passwordInput.value.length < 8) {
  alert("Password must be at least 8 characters.");
}


Check for a capital letter and a number using regex:
javascript
Copy code
const password = passwordInput.value;
if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
  alert("Password must include at least one capital letter and one number.");
}


Events
When the login button is clicked, execute the login validation logic:
javascript
Copy code
loginButton.addEventListener("click", function () {
  validateLogin();
});

Dashboard
DOM References:
dashboardContainer: References the main container for displaying dashboard content using document.getElementById("dashboard")
welcomeMessage: Displays a personalized greeting using document.getElementById("welcomeMessage")
Logic
Display a personalized welcome message based on the logged-in user:
javascript
Copy code
welcomeMessage.textContent = `Welcome, ${usernameInput.value}!`;

Populate the dashboard with user-specific data:
javascript
Copy code
const userTasks = fetchUserTask(usernameInput.value);
userTasks.forEach(task => {
  const taskElement = document.createElement("div");
  taskElement.textContent = task;
  dashboardContainer.appendChild(taskElement);
});

Key JavaScript Concepts:
Loops: Used to display all tasks for the user:
javascript
Copy code
userTasks.forEach(task => {
  // Includes each task to the dashboard
});

Task Manipulation
DOM References:
taskList: References the container displaying all tasks using document.getElementById("taskList")
addTaskButton: References the button to add a new task using document.getElementById("addTaskBtn")
taskInput: References the input field for adding a task using document.getElementById("taskInput")
Logic
Add a new task:
javascript
Copy code
addTaskButton.addEventListener("click", function () {
  if (taskInput.value.trim() !== "") {
    const task = taskInput.value.trim();
    taskList.push(task);
    updateTaskList();
  } else {
    alert("Task cannot be empty.");
  }
});

Change a task using a remove button dynamically attached to each task:
javascript
Copy code
function changeText(taskIndex) {
  taskList.splice(taskIndex, 1);
  updateTaskList();
}

Key JavaScript Concepts:
Data Types: taskList is an array to store tasks:
javascript
Copy code
const taskList = [];

FINAL OUTPUTS
If the user enters a username but no password:
Alert: "Password must be at least 8 characters"
Dashboard:
Display a welcome message like: "Welcome, Tope!"
