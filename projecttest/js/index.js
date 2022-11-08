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
var fieldInputsDB = firebase.database().ref('fieldInputs');



function getElementVal(id){
  return document.getElementById(id).value;
};
console.log('here');
function submitForm(){

  var stringFieldFirst = getElementVal('stringField');
  var otherStringFieldSecond = getElementVal('otherStringField');

  console.log(stringFieldFirst, otherStringFieldSecond);
};

$('#submitInputButton').click(submitForm());
