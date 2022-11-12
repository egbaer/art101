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


$("#fizzButtonBetter").click(function(){
  $('#outputBetter').html("");
  var newSelectors = new Map();
  for (var i = 0; i <= 8; i++){
    currentVal = document.getElementsByClassName('inputBetter')[i].value;
    if (! currentVal){
      console.log("Getting lazy are we?");
      console.log("Dummy!");
      alert("Completely fill out all fields");
      return;
    };
    newSelectors.set(document.getElementsByClassName('inputBetter')[i].id,currentVal);
  }
  fizzBuzzBetter(newSelectors);
});
