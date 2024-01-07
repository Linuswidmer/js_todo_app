// app.js

document.addEventListener("DOMContentLoaded", function () {
    
	const app = document.getElementById("app");
	const formContainer = document.createElement("div");
	formContainer.classList.add("container", "mt-5");
	app.appendChild(formContainer);

	// Create a flex container for input and button
	const flexContainer = document.createElement("div");
	flexContainer.classList.add("d-flex", "flex-row", "w-70");
	flexContainer.style.margin = "auto"; // Center horizontally
	formContainer.appendChild(flexContainer);

	// Create input for task Name
	const taskTitleInput = document.createElement("input");
	taskTitleInput.classList.add("form-control", "mr-2");
	taskTitleInput.type = "text";
	taskTitleInput.placeholder = "Add a new task";
	taskTitleInput.style.width = "30%"; // Set a smaller percentage width for the title input
	flexContainer.appendChild(taskTitleInput);

	// Create input for new tasks
	const taskInputDescription = document.createElement("input");
	taskInputDescription.classList.add("form-control", "mr-2");
	taskInputDescription.type = "text";
	taskInputDescription.placeholder = "Add description";
	taskInputDescription.style.width = "70%"; // Set a larger percentage width for the description input
	flexContainer.appendChild(taskInputDescription);


	// Create button to add tasks
	const addButton = document.createElement("button");
	addButton.textContent = "Add Task";
	addButton.classList.add("btn", "btn-primary"); // Add margin to separate input and button
	addButton.style.width = "100px";
	addButton.style.display = "flex"; // Set display to flex
	addButton.style.whiteSpace = "nowrap"; // Prevent text from wrapping
	flexContainer.appendChild(addButton);
	
	// Create table to hold tasks
	const taskTable = document.createElement("table");
	taskTable.classList.add("table", "mt-5", "mx-auto");
	taskTable.style.width = "70%";
	app.appendChild(taskTable);

	// Add table header
	const tableHeader = document.createElement("thead");
	const headerRow = document.createElement("tr");

	// Create and style header cells with grey background
	const titleHeaderCell = document.createElement("th");
	titleHeaderCell.textContent = "Title";
	titleHeaderCell.classList.add("text-dark", "fixed-width");
	titleHeaderCell.style.width = "30%";
	headerRow.appendChild(titleHeaderCell);

	const descriptionHeaderCell = document.createElement("th");
	descriptionHeaderCell.textContent = "Description";
	descriptionHeaderCell.classList.add("text-dark", "fixed-width");
	descriptionHeaderCell.style.width = "70%";
	headerRow.appendChild(descriptionHeaderCell);

	// Append the header row to the table header
	tableHeader.appendChild(headerRow);

	// Append the table header to the task table
	taskTable.appendChild(tableHeader);
	
	// Append the table header to the task table
	taskTable.appendChild(tableHeader);
	

    // Create table body
    const tableBody = document.createElement("tbody");
    taskTable.appendChild(tableBody);

    addButton.addEventListener("click", addTask);

	document.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			addTask();
		}
	});

	function addTask() {
		const taskText = taskTitleInput.value.trim();
		const taskDescription = taskInputDescription.value.trim();
	
		if (taskText !== "") {
			const taskRow = document.createElement("tr");
	
			// Add title column
			const titleColumn = document.createElement("td");
			titleColumn.textContent = taskText;
			taskRow.appendChild(titleColumn);
	
			// Add description column (empty for now)
			const descriptionColumn = document.createElement("td");
			descriptionColumn.textContent = taskDescription;
			taskRow.appendChild(descriptionColumn);
	
			// Append row to the table body
			tableBody.appendChild(taskRow);
	
			taskRow.addEventListener("click", function () {
				taskRow.classList.toggle("completed");
			});
	
			taskTitleInput.value = "";
			taskInputDescription.value = "";
		}
	}
});
