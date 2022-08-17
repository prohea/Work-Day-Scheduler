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
    var projectRowEl = $('');
}