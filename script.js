// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

var hourPast = hourPast < currentTime;
var hourNow = currentTime;
var hourFuture = hourFuture < currentTime;

var hourNow = currentTime;
console.log(hourNow)
console.log(currentTime)
    function backgroundColorEdit(){
        if (hourNow == currentTime){
            document.getElementsByClassName("text-center").style.backgroundColor = "red";
        }else if (hourNow < currentTime){
            document.getElementsByClassName("text-center").style.backgroundColor = "grey";
        }else 
        {
            document.getElementsByClassName("text-center").style.backgroundColor = "green";
        }
}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

} );
  $( ".saveBtn" ).on( "click", function() {
    console.log($(this))
    console.log($(this).parent())
    console.log($(this).parent().attr("id"))
    console.log($(this).siblings("textarea").val())
    var hourBlockId = $(this).parent().attr("id")
    var hourTextarea = $(this).siblings("textarea").val()
    localStorage.setItem(hourBlockId, hourTextarea);
  } );


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
$("#hour-9").children("textarea").val(localStorage.getItem("hour-9"))
$("#hour-10").children("textarea").val(localStorage.getItem("hour-10"))
$("#hour-11").children("textarea").val(localStorage.getItem("hour-11"))
$("#hour-12").children("textarea").val(localStorage.getItem("hour-12"))
$("#hour-13").children("textarea").val(localStorage.getItem("hour-13"))
$("#hour-14").children("textarea").val(localStorage.getItem("hour-14"))
$("#hour-15").children("textarea").val(localStorage.getItem("hour-15"))


var now = new Date(); var hours = now. getHours() 