// Author: Emily Baer and Hannah Hodor
// Date: 11/9/2022
// Email: egbaer@ucsc.edu hhodor@ucsc.edu
// Public Domain

//This function takes a string and mods its length by four. It returns a different house string based on whether the number is 0 to 3
function sortingHat(enterName) {
  var length = enterName.length;
  var mod = length%4;
  if (mod==0){
    return("Groofindoor");
  } else if (mod == 1){
    return("Roovencloo");
  } else if (mod ==2){
    return("Slytheroon");
  } else{
    return ("Hooflepoof");
  }
};

//This adds a click event to the button. It gets the value of the input field and runs it through the sorting hat function. It then creates a paragraph with a class of results and appends it to the output div. The paragraph contains the house results.
$('#button').click(function(){
  var name = $('#input').val();
  var house = sortingHat(name);
  var newPara = $('<p class="results"></p>');
  newPara.html("Welcome to your hoose! "+house);
  $('#output').append(newPara);
});


//Bonus Tasks
//The list of possible houses to be sorted into
var houseArray = ["Groofindoor", "Roovencloo", "Slytheroon", "Hooflepoof", "Chess Club", "Moonticoorein"];

//This function takes a string and mods its length by the length of the house array. It returns a different house string based on whether the number is 0 to the length of the house array. It does so by using mod as the index of the house array.
function betterSortingHat(enterName) {
  var nameLength = enterName.length;
  var mod = nameLength%houseArray.length;
  return(houseArray[mod]);
};

//This adds a click event to the button. It gets the value of the input field and runs it through the better sorting hat function. It then creates a paragraph with a class of results and appends it to the output div. The paragraph contains the house results.
$('#betterButton').click(function(){
  var name = $('#betterInput').val();
  var house = betterSortingHat(name);
  var newPara = $('<p class="results"></p>');
  newPara.html("Welcome to your better hoose! "+house);
  $('#betterOutput').append(newPara);
});
