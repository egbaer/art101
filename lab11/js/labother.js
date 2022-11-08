// author me
// date yes, it is a date
// email email@email.email

$('#challenge').append('<button id="buttonChalEl">click me.</button>');


$('#problems').append('<button id="buttonProbEl">I want to break free~</button>');


$('#results').append('<button id="buttonResEl">CLICK! HERE!</button>');


$('#buttonChalEl').click(function(){
  $('#challenge').toggleClass("special");
});

$('#buttonProbEl').click(function(){
  $('#problems').toggleClass("specialler");
});

$('#buttonResEl').click(function(){
  $('#results').toggleClass("superduperspecial");
});















// $('#problems').append("<button id='button-prob'>Click Here</button>");

// $('#button-chal').click(function(){
//   $('#challenge').toggleClass("special");
// });
