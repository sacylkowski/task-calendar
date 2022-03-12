// grabbing elements 
var currentDay = document.getElementById("currentDay");


// adding date to top of the page
var currentDate = moment();
currentDay.textContent = currentDate.format("dddd, MMMM Do, YYYY");

// changing the timeblocks color depending on the time of day

var currentHour = moment().hour();
var inputEl = $("input");

$(document).ready(function() {
    for (i = 0; i < inputEl.length; i++) {
        var hour = $(inputEl[i]).attr("id");
        var timeDifference = moment(hour, "ha").diff(moment(currentHour, "ha"), "hours");
        if (timeDifference === 0) {
            $(inputEl[i]).addClass("present");
        } else if (timeDifference < 0) {
            $(inputEl[i]).addClass("past");
        } else {
            $(inputEl[i]).addClass("future");
        }
    }
})