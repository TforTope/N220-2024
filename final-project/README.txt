### Final Project


### Github Link

https://github.com/TforTope/N220-2024/tree/main/final-project

### Major Features

**Login Form**


- DOM References:
UsernameInput: References the username input field using document.getElementByID(“Username”)
PasswordInput:References the Password input field using document.getElementByID(“Password”)
LoginButton:References the login button   using document.getElementById(“loginBtn”).


Logic
Check if the username field is empty 

If (usernameInput.value === ‘“”){
alert(“Please enter a username.”);
}

2.Validate the Password
Ensure it is at least 8 characters:

If(passwordInput.value.length <8 ) {
alert(“Password must be at least 8 characters.”);
}

Check for a capital letter and a number using regex:
Const password = passwordInput.value;
If (!/[A-Z/].test.(password) || !/ 
[0-9]/.test(password)){
alert( “Password must include at least one capital letter and one number.”);
}

- Events:
When the login button is clicked,execute the log in validation logic:

Login Button.addEventlistener(“click”,
 function() {
validateLogin();
});

Dashboard

DOM References:

dashboardContainer: Reference the main container for displaying dashboard content using document.getElementByid(“dashboard”).
welcomeMessage:Displays a personalized greeting using document.getElementByid(“welcomeMessage”).

Logic

Display a personalized welcome message based on the logged-in user:
welcomeMessage.textContent= ‘Welcome,  $ {usernameInput.value} !’;   4f

Populate the dashboard with user-specific data:
Const userTasks=
fetchUserTask(usernameInput.value);
userTasks.forEach(task => {
	Const tastElement =
document.createElement(“div”);
	taskElement.textContent = task;
dashboardcontainer.appenChild(tastElement
);
});


Key Javascript Concepts:

Loops: Used to display all the task for the user :
userTask.forEach(task =>{
	//Includes each task to the dashboard 
});


Task Manipulation

DOM References
taskList: References the container displaying all task using 
document.getElementById(“taskList”).

addTaskButton: References the button to add a new task using
document.getElementByID(“addTaskBtn”)
taskInput: Reference the input field for adding a task using 
document.getElementByid(“taskInput”)

Logic

Add a new task:

addTaskButton.addEventListener("click", function () {
    if (taskInput.value.trim() !== "") {
        const task = taskInput.value.trim();
        taskList.push(task);
        updateTaskList();
    } else {
        alert("Task cannot be empty.");
    }
});

Delete a Task using a Remove button dynamically attached to each task:
function deleteTask(taskIndex) {
    taskList.splice(taskIndex, 1);
    updateTaskList();
}

Key Javascript Concepts:
Data Types: taskList is an array to store tasks:

Const taskList = [ ];


FINAL OUTPUTS:
1.if the user enters a username but no password:

Alert” Password must be at least 8 characters”

2 Dashboard

Display a welcome message like;

“Welcome, Tope!”

