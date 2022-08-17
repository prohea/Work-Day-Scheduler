// Variables
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

// Display Time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

//Print date to the page
function printProjectDate(name, type, hourlyRate, dueDate) {
    var projectRowEl = $('<tr>');

    var projectNameTdEl = $('<td>').addClass('p-2').text(name);

    var projectTypeTdEl = $('<td>').addClass('p-2').text(type);

    var rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

    var dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);

    var daysToDate = moment(dueDate, 'MM/DD/YYYY').diff(moment(), 'days');
    var daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);

    var totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);

//Chain
var totalTdEl = $('<td>')
    .addClass('p-2')
    .text('$' + totalEarnings);

var deleteProjectBtn = $('<td>')
.addClass('p-2 delete-project-btn text-center')
.text('X');

//List <td>
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
    var dailyTotal = rate * 8;
    var total = dailyTotal * days;
    return total;
}

function handleDeleteProject(event) {
    console.log(event.target);
    var btnClicked = $(event.target);
    btnClicked.parent('tr').remove();
}

//form submission
function handleProjectFormSubmit(event) {
    event.preventDefault();

    var projectName = projectNameInputEl.val().trim();
    var projectType = projectTypeInputEl.val().trim();
    var hourlyRate = hourlyRateInputEl.val().trim();
    var dueDate = dueDateInputEl.val().trim();

    printProjectData(projectName, projectType, hourlyRate, dueDate);

    projectFormEl[0].reset();
}
