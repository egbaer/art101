const firebaseConfig = {
    apiKey: "AIzaSyDn9EVeF0wcIGV43BovsZG4Vc_YrDv-LiQ",
    authDomain: "tester2-af890.firebaseapp.com",
    databaseURL: "https://tester2-af890-default-rtdb.firebaseio.com",
    projectId: "tester2-af890",
    storageBucket: "tester2-af890.appspot.com",
    messagingSenderId: "259927215704",
    appId: "1:259927215704:web:c449149a15b325ea17c42d",
    measurementId: "G-JFR7BRE2MJ"
  };

//initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var dbRef = firebase.database().ref();
var inputRef = dbRef.child('strInput');
var outputDiv = $("#message");


$('#submitInputButton').click(function(){
  // var firstString = document.getElementById('stringField').value;
  var firstString = $('#stringField').val();
  // var otherString = document.getElementById('otherStringField').value;
  var otherString = $('#otherStringField').val();
  console.log('Here is the first user input: '+firstString+" Here is the second user input: " + otherString);

  saveInput(firstString, otherString);
  console.log("hopefully sent?");

  console.log("I am here");
  inputRef.on("child_added", function(snap){
    console.log("I am in the function");
    let coolStr = snap.val();
    console.log(snap);
    console.log("just coolstr"+ coolStr);
    console.log("This the first cool string: "+coolStr.firstString);
    coolInputArray.push(coolStr.firstString);
    console.log("This is fieldInputs: "+coolStr.fieldInputs);
    console.log("This the other cool string: "+coolStr.otherString);
    coolInputArray.push(coolStr.otherString);
  });
  console.log("I am out of here");
});

const saveInput = (firstString, otherString) => {
  var newUserInputs = inputRef.push();
  newUserInputs.set({
    //The key controls what is the key in the database
    'firstString' : firstString,
    'otherString' : otherString
  });
};


var coolInputArray = [];
// console.log("I am here");
// inputRef.on("child_added", function(snap){
//   console.log("I am in the function");
//   let coolStr = snap.val();
//   console.log(snap);
//   console.log("just coolstr"+ coolStr);
//   console.log("This the first cool string: "+coolStr.firstString);
//   coolInputArray.push(coolStr.firstString);
//   console.log("This is fieldInputs: "+coolStr.fieldInputs);
//   console.log("This the other cool string: "+coolStr.otherString);
//   coolInputArray.push(coolStr.otherString);
// });
// console.log("I am out of here");
