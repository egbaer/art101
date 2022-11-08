/**
*Author: Dangc Aaron, Philip Orihuela
*Created: November 2, 2022
*License: Public Domain
*/

$('#big-table').append('<button id="yourDoom">Click Me!</button>');

$('#challenge').append('<button id="doctorDoom">FREEDOM!</button>');

$('#results').append('<button id="doom">JUST DO IT!</button>');

$('#yourDoom').click(function(){
  $('#big-table').toggleClass("special");
});

$('#doctorDoom').click(function(){
  $('#challenge').toggleClass("specialler");
});

$('#doom').click(function(){
  $('#results').toggleClass("superduperspecial");
});
