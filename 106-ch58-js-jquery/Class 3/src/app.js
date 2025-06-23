



function saveTask() {
    
    console.log("Save button clicked");
    // Get the values from the input fields
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selectStartDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget);

    //build the task object
    const newTask = new Task(title, description, color, date, status, budget);
    // This creates a new newTask object using the values retrieved from the input fields.
    console.log(newTask);
   displayTask(newTask);

   
}

 function displayTask(task) {
       /*  let taskHtml = "Task Details:";
        $(".get-list").append( taskHtml);
 */
        // This function displays the task details in the HTML
        let taskHtml = `<div class="task-item" style="border-color: ${task.color};">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Date: ${task.date}</p>
            <p>Status: ${task.status}</p>
            <p>Budget: $${task.budget}</p>
        </div>`;
        
        $(".get-list").append(taskHtml);
        console.log("Task displayed on the page");
    }
   

function init() {
        console.log("App Installed");

    //load data

//hook up events
$("#btnSave").click(saveTask);
    // Add your save logic here


}
window.onload = init; // this wait for the DOM to be fully loaded before running init
//it waits until the html and css are fully loaded before running the init function