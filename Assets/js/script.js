$("#currentDate").text(moment().format('dddd, MMMM Do YYYY'));
var currentHour = moment().hour();

//When the document loads
$(document).ready(function () {
    //Calling function to load data from local storage
	getLocalStorage();
    //Calling function to change text area color base on criteria
    setUpTimeBlocks();

    //Saving event into localstorage when click on save
    $(".btn").on("click", function() {
        //Getting value from description text area for each time block
        var inputData = $(this).siblings(".description").val();
        //Getting hour value from each time block by id
        var inputTime = $(this).parents(".time-block").attr("id").split("-")[1];
        //Saving the data in the local storage
        localStorage.setItem(inputTime, inputData);
    });
	
});


//Format timeblock colors depending on the time
function setUpTimeBlocks() {
	$(".time-block").each(function () {
		var numtextArea = $(this).attr("id").split("-")[1];

		//Add style to time blocks to show where we are in the day
		if ((parseInt(numtextArea)) === currentHour) {
			$(this).addClass("present");
		}
		else if ((parseInt(numtextArea)) < currentHour) {
			$(this).addClass("past");
		}
		else  {
			$(this).addClass("future");
		}
	});
}

//Function to load all the data from local storage
function getLocalStorage() {
    $(".time-block").each(function() {
        //Getting hour value from each time block by id
        var numtextArea = $(this).attr("id").split("-")[1];
        //Getting date from local storage for each text area
        var getData = localStorage.getItem(numtextArea);
        console.log(numtextArea, getData);
        //Inserting data into the text area for each element
        $(this).children(".description").val(getData);
    });
}

