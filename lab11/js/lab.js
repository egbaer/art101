// Author
// Date
// Email
// Public Domain

var buttonChalEl = $("<button>Click Me</button>");
buttonChalEl.attr('id', 'button-chal');
$('#challenge').append(buttonChalEl);

$('#problems').append("<button id='button-prob'>Click Here</button>");

$('#results').append("<button id='button-res'>Click me~");


$('#button-chal').click(function(){
  $('#challenge').toggleClass("special");
});

$('#button-prob').click(function(){
  $('#problems').toggleClass("special");
});

$('#button-res').click(function(){
  $('#results').toggleClass("special");
});
