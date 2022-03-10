// grabbing elements 
var currentDay = document.getElementById("currentDay")

var currentDate = moment();

currentDay.textContent = currentDate.format("dddd, MMMM Do, YYYY");

