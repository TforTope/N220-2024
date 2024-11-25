// Get the elements from the DOM
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
const loginButton = document.getElementById("loginButton");

const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const loggedInUserElement = document.getElementById("loggedInUser");
const logoutButton = document.getElementById("logoutButton");
const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTaskButton");

let tasks = [];
let loggedInUser = null;

// Add event listener to login button
loginButton.addEventListener("click", function () {
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  let errors = [];

  // Validate username
  if (username === "") {
    errors.push("Username cannot be empty.");
  }

  // Validate password
  if (password.length < 8) {
    errors.push("Password must have at least 8 characters.");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include at least one capital letter.");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Password must include at least one number.");
  }

  // Display error messages or success message
  if (errors.length > 0) {
    feedback.textContent = errors.join(" ");
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Login successful!";
    feedback.style.color = "green";

    // Store the username and switch to the dashboard
    loggedInUser = username;
    loggedInUserElement.textContent = loggedInUser;
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";

    // Load tasks for the logged-in user (for now, just an empty array)
    loadTasks();
  }
});

// Add task
addTaskButton.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();

  if (taskText !== "") {
    const newTask = {
      text: taskText,
      completed: false,
      owner: loggedInUser,
    };
    tasks.push(newTask);
    loadTasks();
    newTaskInput.value = ""; // Clear the input
  }
});

// Load tasks for the current user
function loadTasks() {
  taskList.innerHTML = ""; // Clear current task list
  tasks
    .filter((task) => task.owner === loggedInUser)
    .forEach((task, index) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");

      const taskText = document.createElement("h4");
      taskText.textContent = task.text;
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
      deleteButton.textContent = "Change Text";
      deleteButton.classList.add("red");
      deleteButton.addEventListener("click", function () {
        tasks.splice(index, 1); // Remove task
        loadTasks();
      });

      taskElement.appendChild(taskText);
      taskElement.appendChild(completeButton);
      taskElement.appendChild(deleteButton);
      taskList.appendChild(taskElement);
    });
}

// Logout
logoutButton.addEventListener("click", function () {
  loggedInUser = null;
  loginSection.style.display = "block";
  dashboardSection.style.display = "none";
  feedback.textContent = "You have logged out.";
  feedback.style.color = "blue";
});
