var outputEl= document.getElementById('output');
var newEl = document.createElement("p");
newEl.innerHTML="This is the first variable";
var newerEl = document.createElement("p");
newerEl.innerHTML="I am opaque";
newEl.style.color="rgba(30, 30, 30, 0.5)";
newerEl.style.fontSize="80px";
newerEl.style.color="green";
outputEl.append(newEl, newerEl);


var putMeBefore= document.createElement("div");
putMeBefore.style.width="50px";
putMeBefore.style.height="40px";
putMeBefore.style.backgroundColor="blue";

outputEl.insertBefore(putMeBefore, outputEl.firstChild);
