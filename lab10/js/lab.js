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
