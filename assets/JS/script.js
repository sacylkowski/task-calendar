// grabbing elements 
var currentDay = document.getElementById("currentDay");

// adding date to top of the page
var currentDate = moment();
currentDay.textContent = currentDate.format("dddd, MMMM Do, YYYY");

// changing the timeblocks color depending on the time of day

var currentHour = moment().hour();
var inputEl = $("input");

$(document).ready(function () {
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
});

// when you hit the save button, the text is saved to local storage.  This value is displayed on the browser after hitting refresh.

$("#eightAM button").click(function () {
    var input = $("#8AM").val();
    localStorage.setItem("eightAM", input);
});
var eightAM = localStorage.getItem("eightAM");
$("#8AM").val(eightAM);

$("#nineAM button").click(function () {
    var input = $("#9AM").val();
    localStorage.setItem("nineAM", input);
});
var nineAM = localStorage.getItem("nineAM");
$("#9AM").val(nineAM);

$("#tenAM button").click(function () {
    var input = $("#10AM").val();
    localStorage.setItem("tenAM", input);
});
var tenAM = localStorage.getItem("tenAM");
$("#10AM").val(tenAM);

$("#elevenAM button").click(function () {
    var input = $("#11AM").val();
    localStorage.setItem("elevenAM", input);
});
var elevenAM = localStorage.getItem("elevenAM");
$("#11AM").val(elevenAM);

$("#twelvePM button").click(function () {
    var input = $("#12PM").val();
    localStorage.setItem("twelvePM", input);
});
var twelvePM = localStorage.getItem("twelvePM");
$("#12PM").val(twelvePM);

$("#onePM button").click(function () {
    var input = $("#1PM").val();
    localStorage.setItem("onePM", input);
});
var onePM = localStorage.getItem("onePM");
$("#1PM").val(onePM);

$("#twoPM button").click(function () {
    var input = $("#2PM").val();
    localStorage.setItem("twoPM", input);
});
var twoPM = localStorage.getItem("twoPM");
$("#2PM").val(twoPM);

$("#threePM button").click(function () {
    var input = $("#3PM").val();
    localStorage.setItem("threePM", input);
});
var threePM = localStorage.getItem("threePM");
$("#3PM").val(threePM);

$("#fourPM button").click(function () {
    var input = $("#4PM").val();
    localStorage.setItem("fourPM", input);
});
var fourPM = localStorage.getItem("fourPM");
$("#4PM").val(fourPM);

$("#fivePM button").click(function () {
    var input = $("#5PM").val();
    localStorage.setItem("fivePM", input);
});
var fivePM = localStorage.getItem("fivePM");
$("#5PM").val(fivePM);




