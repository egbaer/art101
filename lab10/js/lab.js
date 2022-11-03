/*
 * Author: Emily Baer <egbaer@ucsc.edu> and Hannah Hodor <hhodor@ucsc.edu>
 * Created 2 November
 * License: Public Domain
 */
 //We took our nameSorter function from Lab 7 and made a few modifications to it (made it take an arg, got rid of windowprompt) so we could effectively use it in our event Listener anon function
 function nameSorter(inputeName){
   var userName = inputeName;
   var nameArray = userName.split('');
   var sortedArray = nameArray.sort();
   var sortedName = sortedArray.join("");
   return(sortedName);
 }

//These are our variables that reference an element that already exists in our HTML.
var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");

//This adds a sensor to our button on our webpage. It checks if it is clicked. If it is, it runs the anon function defined below
buttonEl.addEventListener("click", function(){
  //This stores the text typed by the user in the input tag
  var inputEl = document.getElementById("user-name").value;
  //This stores the results of a call to the nameSorter function using the user's input as an arg
  var sortedName = nameSorter(inputEl);
  //This changes the inner html of the output div to display the sortedName
  outputEl.innerHTML = sortedName;
  //This clears out the input tag after the button is clicked because it looks nicer
  document.getElementById("user-name").value ="";
});


//Bonus Tasks
//Bonus Task 1
//Below is the anagram function from Wes Modes' page, it was created by the person linked.
// shuffleArray - take an array and shuffle the contents
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// find the button element
buttonElAna = document.getElementById("my-button-ana");
// find the form element
inputElAna = document.getElementById("user-name-ana");
// find output element
outputElAna = document.getElementById("output-ana");

// add an event listener to button
buttonElAna.addEventListener("click", function(){
  // get value from name element
  var userName = inputElAna.value;
  // modify value - either sort or shuffle
  var newName = toTitleCase(reorderUserName(userName));
  // put value in output element
  outputElAna.innerHTML = "<p id=name-results>" + newName + "</p>";
});


//Task two
//These are our variables that reference an element that already exists in our HTML.
var buttonElTwo = document.getElementById("task-two-button");
var outputElTwo = document.getElementById("output-two");

//This adds a sensor to our button on our webpage. It checks if it is clicked. If it is, it runs the anon function defined below
buttonElTwo.addEventListener("click", function(){
  //This clears out the innerHTML of our second, technically third, output div. If this wasn't here, you would be able to add paragraphs forever.
  outputElTwo.innerHTML="";
  //For loop starts at the correct number of input tags. We only want to check the input tags 3, 4, and 5, so we start the i variable at 2 because code counts start at 0
  for (let i=2; i<5;i++) {
    //Gets the value of the input tag at the i variable the for loop is currently on
    var inputEl = document.getElementsByTagName("input")[i].value;
    //Runs the value through the nameSorter function and saves the results
    var sortedName = nameSorter(inputEl);
    //Appends a paragraph child to the output div with the sortedName as the content of the paragraph.
    outputElTwo.appendChild(document.createTextNode(sortedName));
    //Makes the sorted names appear on separate lines instead of right next to each other
    outputElTwo.appendChild(document.createElement("br"));
    //Cleans out the input tags after this function is done using them
    document.getElementsByTagName("input")[i].value="";
  }
  });

  // Task Three
  //Gets references the html elements with the ids of top and bottom box and sets them to a variable
  topBoxEl = document.getElementById("top-box");
  bottomBoxEl = document.getElementById("bottom-box");
  removeBoxEl = document.getElementById("remove-box");
  //adds an event listener to both of said elements. When they are clicked they will disappear
  topBoxEl.addEventListener('click', function(){
    topBoxEl.style.display="none";
  });
  bottomBoxEl.addEventListener('click', function(){
    bottomBoxEl.style.display="none";
  });

  removeBoxEl.addEventListener('click', function(){
    if(bottomBoxEl.style.display=="none" && topBoxEl.style.display=="none"){
      removeBoxEl.style.display="none";
    };
  });
