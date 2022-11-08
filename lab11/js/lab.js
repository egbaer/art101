// Author: Emily Baer and Hannah Hodor
// Date: 11/7/2022
// Email: egbaer@ucsc.edu hhodor@ucsc.edu
// Public Domain


//This creates a button and appends it to the first element with the class of sectBox using jQuery
var buttonChalEl = $("<button>Click Me</button>");
buttonChalEl.attr('id', 'button-chal');
$('.sectBox').eq(0).append(buttonChalEl);

//This creates a button and appends it to the second element with the class of sectBox using jQuery
$('.sectBox').eq(1).append("<button id='button-prob'>Click Here</button>");

//This creates a button and appends it to the third element with the class of sectBox using jQuery
$('.sectBox').eq(2).append("<button id='button-res'>Click me~");

//Helpful link
// https://stackoverflow.com/questions/9887534/get-an-element-by-index-in-jquery

//Adds an event listener to a button to sense for a click. Toogles the class called special on itself.
$('#button-chal').click(function(){
  $('#challenge').toggleClass("special");
});

//Adds an event listener to a button to sense for a click. Toogles the class called special on itself.
$('#button-prob').click(function(){
  $('#problems').toggleClass("special");
});

//Adds an event listener to a button to sense for a click. Toogles the class called special on itself.
$('#button-res').click(function(){
  $('#results').toggleClass("special");
});


//Bonus Task
//Makes a button and inserts it before the element with the id of pSecSet
$("<button id='button-blue' class='turnMeBlue'>I HATE THE COLOR RED!!</button>").insertBefore('#pSecSet');

//Makes a button and inserts it before the element with the id of pSecSet
$("<button id='button-red' class='turnMeRed'>I HATE THE COLOR BLUE!!</button>").insertBefore('#pSecSet');

//Adds an event listener to the blue button. When it is clicked it turns the red button blue.
$('#button-blue').click(function(){
  $('#button-red').toggleClass("turnMeRed");
  $('#button-red').toggleClass("turnMeBlue");
});

//Adds an event listener to the red button. When it is clicked it turns the blue button red.
$('#button-red').click(function(){
  $('#button-blue').toggleClass("turnMeBlue");
  $('#button-blue').toggleClass("turnMeRed");
});

//Creates a purple button
var buttonPurpleEl = $("<button id='button-purple' class='turnMePurple'>I HATE THE COLOR GREEN!!</button>");

//Appends purple button to the bunus div
$('#bonus').append(buttonPurpleEl);

//Creates a green button
var buttonGreenEl= $("<button id='button-green' class='turnMeGreen'>I HATE THE COLOR PURPLE!!</button>");

//Appends green button to the bonus div
$('#bonus').append(buttonGreenEl);

//Adds a click event listner to the purple button. When it is clicked, it changes the green button to purple and changes itself back to purple if it is not already purple
buttonPurpleEl.click(function(){
  if (buttonGreenEl.hasClass("turnMeGreen")){
    buttonGreenEl.toggleClass("turnMeGreen");
    buttonGreenEl.toggleClass("turnMePurple");
  }
  if (buttonPurpleEl.hasClass("turnMeGreen")){
    buttonPurpleEl.toggleClass("turnMeGreen");
  }
  if (buttonPurpleEl.hasClass("turnMePurple")==false){
    buttonPurpleEl.toggleClass("turnMePurple");
  }
});

//Adds a click event listner to the green button. When it is clicked, it changes the purple button to green and changes itself back to green if it is not already green
buttonGreenEl.click(function(){
  if (buttonPurpleEl.hasClass("turnMePurple")){
    buttonPurpleEl.toggleClass("turnMePurple");
    buttonPurpleEl.toggleClass("turnMeGreen");
  }
  if (buttonGreenEl.hasClass("turnMePurple")){
    buttonGreenEl.toggleClass("turnMePurple");
  }
  if (buttonGreenEl.hasClass("turnMeGreen")==false){
    buttonGreenEl.toggleClass("turnMeGreen");
  }
});
