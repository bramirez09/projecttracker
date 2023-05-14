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

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  var projects = readProjectsFromStorage();
  var name = localStorage.getItem("projectname", name)
  var type = localStorage.getItem("type",type)
  var hourlyRate = localStorage.getItem("rate",hourlyRate)
  var dueDate = localStorage.getItem("total",dueDate)

  var storedProjects = JSON.parse(localStorage.projects);


  // You can also chain methods onto new lines to keep code clean

  var projectRowEl = localStorage. getItem ("name", "type", "hourlyRate", "dueDate")

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  projectRowEl.append(
    projectNameTdEl,
    projectTypeTdEl,
    rateTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    totalTdEl,
    deleteProjectBtn
    );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal('hide');

  }

function readProjectsFromStorage(){
  var projects = JSON.parse(localStorage.getItem('projects')) || [];

  //projects = JSON.parse(projects);
  return projects;
}

/*function writeSavelocalData (project){
  console.log(project)
  var saveLocalData = localStorage.setItem("projects", JSON.stringify(project));
  saveLocalData = readProjectsFromStorage();
  console.log(saveLocalData)
 
}*/

// function calculateTotalEarnings(rate, days) {


// }

// function handleDeleteProject(event) {
// //  var deleteProject = 
// }

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val();
  var dueDate = dueDateInputEl.val();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  var projects = JSON.parse(localStorage.getItem('projects')) || [];

  //project object with user input from form

  var newProject = {
    name: projectName,
    type: projectType,
    rate: hourlyRate,
    date: dueDate,
  }

  projects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projects));

  //writeSavelocalData(newProject);


  projectFormEl[0].reset();
}

projectFormEl.on('submit', handleProjectFormSubmit);
// projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);


setInterval(displayTime, 1000);
