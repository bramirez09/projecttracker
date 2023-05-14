// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

// handle displaying the time
function displayTime() {
  var today = dayjs();
  timeDisplayEl.text(today.format('MMM D, YYYY, h:mm:ss'));
};

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  var name = localStorage.getItem("projectname", name)
  var type = localStorage.getItem("type",type)
  var hourlyRate = localStorage.getItem("rate",hourlyRate)
  var dueDate = localStorage.getItem("total",dueDate)



  // You can also chain methods onto new lines to keep code clean

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


function calculateTotalEarnings(rate, days) {


}

function handleDeleteProject(event) {

}

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

projectFormEl.on('submit', handleProjectFormSubmit);
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);


setInterval(displayTime, 1000);