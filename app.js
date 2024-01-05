// app.js

document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

	// document.title = "Javascript is cool!";
	const formContainer = document.createElement("div");
    formContainer.classList.add("container", "mt-4");

    // Create input for new tasks
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Add a new task";

    // Create button to add tasks
    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";

    // Create ul element to hold tasks
    const taskList = document.createElement("ul");
	const task = document.createElement("li");
	task.textContent = "I can pre generate tasks!";
	taskList.appendChild(task);

    // Append input, button, and ul to the app div
    app.appendChild(taskInput);
    app.appendChild(addButton);
    app.appendChild(taskList);

	addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);

			taskItem.addEventListener("click", function () {
                taskItem.classList.toggle("completed");
            });

            taskInput.value = ""; // Clear the input
        }
    });
});
