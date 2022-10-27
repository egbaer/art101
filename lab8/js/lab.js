var numArray = [4, 80, 90, 2580, 1238, 49, 43792];
//map DOES NOT change the original array!!!
function numDivideByTwo(coolNum){
  dividedNum = coolNum/2;
  return(dividedNum)
}

console.log("Original numArray: " +numArray);
console.log(numDivideByTwo(numArray[1]));

dividedNumArray = numArray.map(numDivideByTwo);
console.log("numArray 'dividedNumArray' after being divided by two: " +dividedNumArray);

celsiusNumArray = dividedNumArray.map(function(anotherNum){
  var celsiusNum = (anotherNum-32) * (5/9);
  return(celsiusNum);
})


console.log("This is the previous array converted to Celsius 'I think lol'" + celsiusNumArray);

document.getElementById("output").innerHTML="Please write this: " + celsiusNumArray;

var nameArray = ["John", "Mary", 9, "Lulie", "Jujie", "Nil", "Bill", "Burger"];

nameIndexFinder = nameArray.findIndex(function(coolEl) {
  if (coolEl === "Jujie") {
    return(true);
  } else {
    return(false);
  }
})
console.log(nameIndexFinder);
