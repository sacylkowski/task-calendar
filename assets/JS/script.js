// grabbing elements 
var currentDay = document.getElementById("currentDay")


// adding date to top of the page
var currentDate = moment();
currentDay.textContent = currentDate.format("dddd, MMMM Do, YYYY");

// changing the timeblocks color depending on the time of day
var textArea = document.querySelector("textarea");

var colorCode = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    if (currentHour === currentHour) {
        textArea.classList.add("present")
    }
}

// var objDate = new Date();
//     var hours = objDate.getHours();
//     if (hours >= 9 && hours <= 17) {
//         hours.classlist.add("present");
//     } else if (hours < 9) {
//         hours.classlist.add("past");
//     } else {
//         hours.classlist.add("future");
//     }

// when you hit the save button, the text is saved to local storage
// var textInputEl = document.querySelectorAll("input");

// function saveToLS() {
//     for (var i = 0; i < textInputEl.length; i++) {
//         if (textInputEl[i].textContent.includes ("")) {
//             console.log("saved");
//             // localStorage.setItem
//         }

//     }
// }

var eightAMEl = document.getElementById("eightAM")
var saveBtn8 = document.getElementById("saveBtn8")

saveBtn8.addEventListener("click", function() {
    console.log("clicked");
//     var input = document.querySelector("#eightAM input");
//   localStorage.setItem("", input.value);
//   var storedTask = localStorage.getItem("");

});

// var saveBtnEl = document.querySelectorAll(".saveBtn");

//  for (var i = 0; i < saveBtnEl.length; i++) {
    //  saveBtnEl[i].addEventListener("click", function() {
        //  console.log("clicked");
    //    saveToLS();
    //  });
//  }