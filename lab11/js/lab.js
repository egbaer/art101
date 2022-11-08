// Author
// Date
// Email
// Public Domain

var buttonChalEl = $("<button>Click Me</button>");
buttonChalEl.attr('id', 'button-chal');
$('.sectBox').eq(0).append(buttonChalEl);


$('.sectBox').eq(1).append("<button id='button-prob'>Click Here</button>");

$('.sectBox').eq(2).append("<button id='button-res'>Click me~");

// https://stackoverflow.com/questions/9887534/get-an-element-by-index-in-jquery

$('#button-chal').click(function(){
  $('#challenge').toggleClass("special");
});

$('#button-prob').click(function(){
  $('#problems').toggleClass("special");
});

$('#button-res').click(function(){
  $('#results').toggleClass("special");
});

//Bonus Task
$("<button id='button-blue' class='turnMeBlue'>I HATE THE COLOR RED!!</button>").insertBefore('#pSecSet');

$("<button id='button-red' class='turnMeRed'>I HATE THE COLOR BLUE!!</button>").insertBefore('#pSecSet');

$('#button-blue').click(function(){
  $('#button-red').toggleClass("turnMeRed");
  $('#button-red').toggleClass("turnMeBlue");
});

$('#button-red').click(function(){
  $('#button-blue').toggleClass("turnMeBlue");
  $('#button-blue').toggleClass("turnMeRed");
});

var buttonPurpleEl = $("<button id='button-purple' class='turnMePurple'>I HATE THE COLOR GREEN!!</button>");

$('#bonus').append(buttonPurpleEl);

var buttonGreenEl= $("<button id='button-green' class='turnMeGreen'>I HATE THE COLOR PURPLE!!</button>");

$('#bonus').append(buttonGreenEl);

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
