// Author : Emily Baer
// Date: Today, lol
// Email: 1@aol.net

function nameSorter(inputName){
  var userName = inputName;

  var nameArray = userName.split('');

  var sortedArray = nameArray.sort();

  var sortedName = sortedArray.join("");

  return(sortedName);
}

var buttonEl = document.getElementById("my-button");

var outputEl = document.getElementById("output")

buttonEl.addEventListener('click', function() {
  var enteredName= document.getElementById("user-name").value;
  var sortedName = nameSorter(enteredName);
  outputEl.innerHTML = sortedName;
})
