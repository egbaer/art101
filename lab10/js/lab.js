// Author: Me, myself, and I
// Date Created: 11.1.1800
// Email: XxXxD3m0nSlaught3RxxXx@gmail.com

// This function takes the input of a user's name, sorts it, and prints it for the user to view
 function nameSorter(nameInput) {
   // This asks users for input
   var userName= nameInput;
   console.log(userName);
   // This splits the input into an array, so "sort" will work on it
   var nameArray= userName.split('');
   console.log(nameArray);
   // The array is sorted
   var sortedArray= nameArray.sort();
   console.log(sortedArray);
   // The array is joined into a string
   var sortedName= sortedArray.join('');
   console.log(sortedName);
   // The sorted name is returned
   return(sortedName);
 }

var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");

buttonEl.addEventListener('click', function() {
  var inputVal = document.getElementById("user-name").value;
  var sortedNewName= nameSorter(inputVal);
  outputEl.innerHTML =sortedNewName;
  document.getElementById("user-name").value="";
});
