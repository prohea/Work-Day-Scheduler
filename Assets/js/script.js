var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");

var toDoItems = [];
//Each object has an hour property and a text property
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

//If there is no to do set up, let's set up the array of objects
function initializeSchedule() {
    //For each time block
    $timeBlocks.each(function () {
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        var todoObj = {
            //Set related todo hour to same as data hour
            hour: thisBlockHr,
            //Get text ready to accept string input
            text: "",
        }
        //Add todo object to array
        toDoItems.push(todoObj);
    });

    //Loop through timeblocks, save array of objects to local storage by stringifying it first
    localStorage.setItem("todos", JSON.stringify(toDoItems));
}

//Format timeblock colors depending on the time
function setUpTimeBlocks() {
    $timeBlocks.each(function () {
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        //Add style to time blocks to show where we are in the day
        if (thisBlockHr == currentHour) {
        $thisBlock.addClass("present").removeClass("past future");
        }
        if (thisBlockHr < currentHour) {
        $thisBlock.addClass("past").removeClass("present future");
        }
         if (thisBlockHr > currentHour) {
        $thisBlock.addClass("future").removeClass("past present");
        }
    });

}


//Loop through array then assign the text to the timeblock with data hour to hour

//Make a variable where then plug it it into the selector

//See which item needs to update based on the hour of the button clicked matching

//When the document loads

//Format timeblocks depending on time

//IF there's nothing for the todos in local storage

//Initialize the array of objects

//Otherwise don't bother

//Display current time

//Render schedule from local storage

//When todo item save button is clicked, save it