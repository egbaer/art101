alert("die, lol");

function nameSorter(){
  var userName = window.prompt("Enter your name mortal fool.");
  console.log(userName);
  console.log(typeof(userName));
  var nameArray = userName.split('');
  console.log(nameArray);
  var sortedArray = nameArray.sort();
  console.log(sortedArray);
  var sortedName = sortedArray.join("idiot");
  console.log(sortedName);
  return(sortedName);
  //return(sortedArray);
  //console.log(sortedName);
  //console.log(typeof(sortedName));
}

document.writeln(nameSorter());


var nextName = window.prompt("pwease entwer yowur name Mw. Obwama");

function sortNameSpaces(nameInput){
  console.log(nameInput);
  var nameSplitBySpaceArray = nameInput.split(' ');
  console.log(nameSplitBySpaceArray);
  var spaceSplitSortedArray = [];
  console.log("Spacesplitsortedarray, should be empty: " + spaceSplitSortedArray);
  for (let i =0; i < nameSplitBySpaceArray.length; i++){
    console.log("I am in a loop, here is the loop number: " + i);
    spaceSplitSortedArray[i] = nameSplitBySpaceArray[i].split('');
    console.log("Item in list: " + spaceSplitSortedArray[i]);
  }
  console.log("This is the spaceSplitSortedArray after the for loop: " + spaceSplitSortedArray);
  console.log(Array.isArray(spaceSplitSortedArray[0]));
  var wordChunksSorted = [];
  for (let i=0; i < spaceSplitSortedArray.length; i++){
    wordChunksSorted[i] = spaceSplitSortedArray[i].sort();
  }
  console.log("This is what wordChunksSorted looks like after having its chunks sorted: " + wordChunksSorted);
  var wordChunksStringsArray = [];
  for (let i=0; i< wordChunksSorted.length; i++){
    wordChunksStringsArray[i]= wordChunksSorted[i].join('');
  }
  console.log("This is what wordChunksStringsArray looks like after the for loop: " + wordChunksStringsArray);
  finalName= wordChunksStringsArray.join(' ');
  console.log("This is your dumb name, lol: " + finalName);
}

sortNameSpaces(nextName);
