// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#project-rate-input');
var dueDateInputEl = $('#project-date-input');


// handle displaying the time
function displayTime() {
  var today = dayjs();
  timeDisplayEl.text(today.format('MMM D, YYYY, h:mm:ss'));
};

//handle printing project data to the page
function printProjectData() {
  // var projects = readProjectsFromStorage();
  var name = localStorage.getItem("projectname");
  var type = localStorage.getItem("type");
  var hourlyRate = localStorage.getItem("rate");
  var dueDate = localStorage.getItem("total");

  var storedProjects = JSON.parse(localStorage.getItem("projects"));

  console.log(storedProjects)


//You can also chain methods onto new lines to keep code clean

  var projectRowEl = localStorage.getItem("projects")
  console.log(projectRowEl)

//By listing each `<td>` variable as an argument, each one will be appended in that order
  $(projectRowEl).append(
    projectName<Td>El,
    projectType<Td>El,
    rate<Td>El,
    dueDate<Td>El,
    daysLeft<Td>El,
    total<Td>El,
    deleteProjectBtn
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal('hide');

}

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val();
  var dueDate = dueDateInputEl.val();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  var projects = 
JSON.parse(localStorage.getItem("projects")) || [];
  //project object with user input from form

    var newProject = {
      name: projectName,
      type: projectType,
      rate: hourlyRate,
      date: dueDate,
    };

    projects.push(newProject);
    localStorage.setItem("projects", 
JSON.stringify(projects));
    printProjectData();
    projectFormEl[0].reset();
}

// function calculateTotalEarnings(rate, days) {
// }

// function handleDeleteProject(event) {
// //  var deleteProject = 
// }


projectFormEl.on('submit', handleProjectFormSubmit);
// projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);


setInterval(displayTime, 1000);
