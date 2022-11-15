// Author: Emily Baer and Hannah Hodor
// Date: 11/11/2022
// Email: egbaer@ucsc.edu hhodor@ucsc.edu
// Public Domain

// This function takes a string of numbers and loops them from 1 to 200. Any number that is a multiple of 3 prints "Fizz", multiples of 5 prints "Buzz", and multiples of 7 prints "Boom". The string starts off empty, if the index is a multiple of any of the desired numbers, printStr has its value concatinated with the corresponding string for that multiple.
function fizzBuzz(){
  for (var i = 1; i<201; i++){
    var printStr = "";
    if (i%3==0){
      printStr = printStr + "Fizz";
    };
    if (i%5==0){
      printStr = printStr + "Buzz";
    };
    if (i%7==0){
      printStr = printStr + "Boom";
    };

    // Checks to see if length is different than zero, which verifies that it is a multiple of something.
    if (printStr.length != 0){

      // The output of the program for each element appends the div class resultLine within the paragraph. The output on line 24 prints the string and the number, while the output on line 27 prints only the number.
      $('#output').append('<div class="resultLine"><p>'+i+' - '+printStr+'!</p></div>');
    } else {
      $('#output').append('<div class = "resultLine"><p>'+i+'</p></div>');
    };
  };
};

// This adds a click event to fizzButton. It presents the results generated from the function fizzBuzz.
$("#fizzButton").click(function(){
  fizzBuzz();
});


//bonus tasks

//This function takes a JS map as an argument. It should have nine key-value pairs total. It loops through the numbers 1 through the iEnd value provided in the argument. It generates an empty string. If the current index has a remainder of zero after being divded by the corresponding user input, it concatenates the string with the corresponding string that the user entered. It does this for all mods. It then checks to see if the string has a length that is not zero.If it is not zero, that means that the index had a remainder of 0 for at least one mod. If so, it appends a paragraph in a div with the string and an exclamation point at the end along with the number.If not, it just appends a paragraph in a div with the index number.
function fizzBuzzBetter(coolMap){
  for (var i = 1; i<=coolMap.get('iEnd'); i++){
    var printStr = "";
    if (i%coolMap.get("modOne")==0){
      printStr = printStr + coolMap.get("modOneStr");
    };
    if (i%coolMap.get("modTwo")==0){
      printStr = printStr + coolMap.get("modTwoStr");
    }
    if (i%coolMap.get("modThree")==0){
      printStr = printStr + coolMap.get("modThreeStr");
    };
    if (i%coolMap.get("modFour")==0){
      printStr = printStr + coolMap.get("modFourStr");
    };
    if (printStr.length != 0){
      $('#outputBetter').append('<div class="resultLine"><p>'+i+' - '+printStr+'!</p></div>');
    } else {
      $('#outputBetter').append('<div class = "resultLine"><p>'+i+'</p></div>');
    };
  };
};

//This adds a click event listener to the fizzButtonBetter button. That gets the user input only if every field if filled out. It only goes through a for loop once
$("#fizzButtonBetter").click(function(){
  //Clears the innerHTML of the outputBetter div.
  $('#outputBetter').html("");
  //Creates an empty map variable
  var newSelectors = new Map();
  //Goes through all of the input fields with the class inputBetter.
  for (var i = 0; i <= 8; i++){
    //creates a variable called currentVal that stores the user input of the current index field.
    // currentVal = document.getElementsByClassName('inputBetter')[i].value;
    currentVal = $('.inputBetter').eq(i).val();
    //Checks if the new variable doesn't have anything in it (the user didn't fill out a field)
    if (! currentVal){
      //If the user didn't fill out something, the console reprimands the user and alerts them to fill out the form completely. It then returns so that no incomplete calculations/functions occur.
      console.log("Getting lazy are we?");
      console.log("Dummy!");
      alert("Completely fill out all fields");
      return;
    };
    //If the user did input something, the current index of input field has its id and value stored as a key value pair in the map.
    // newSelectors.set(document.getElementsByClassName('inputBetter')[i].id,currentVal);
    newSelectors.set($('.inputBetter').eq(i).attr('id'),currentVal);
  }
  //The button runs the fizzBuzzBetter function and passes the completed newSelectors map to it.
  fizzBuzzBetter(newSelectors);
});
