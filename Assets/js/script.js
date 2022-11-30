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

function renderSchedule() {
    toDoItems = localStorage.getItem("todos");
    toDoItems = JSON.parse(toDoItems);

    //Loop through array then assign the text to the timeblock with data hour to hour
    //Make a variable where then plug it it into the selector
    for (var i =0; i < toDoItems.length; i++){
        var itemHour = toDoItems[i].hours;
        var itemText = toDoItems[i].text;

        $("[data-hour=" +itemHour + "]").children("textarea").val(itemText);
    }
    console.log(toDoItems);
}

function saveHandler() {
    var $thisBlock = $(this).parent();

    var hourToUpdate = $(this).parent().attr("data-hour");
    var itemToAdd = (($(this).parent()).children("textarea")).val();

    //See which item needs to update based on the hour of the button clicked matching
    for (var j = 0; j < toDoItems.length; j++){
        if (toDoItems[j].hour == hourToUpdate){
            //Set its text to what was added 
            toDoItems[j].text = itemToAdd;        
        }
    }
    localStorage.setItem("todos", JSON.stringify(toDoItems));
    renderSchedule();
}

//When the document loads
$(document).ready(function() {
    //Format timeblocks depending on time
    setUpTimeBlocks();
    //IF there's nothing for the todos in local storage
    if (!localStorage.getItem("todos")){
        //Initialize the array of objects
        initializeSchedule();
    } //Otherwise don't bother

    //Display current time
    $currentDay.text(currentDate);
    //Render schedule from local storage
    renderSchedule();
    //When todo item save button is clicked, save it
    $scheduleArea.on("click", "button", saveHandler);
});
