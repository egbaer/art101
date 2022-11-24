
// Authors: Emily Baer and Hannah Hodor
// Date: 11/23/2022
// Email: ebaer@ucsc.edu hhodor@ucsc.edu
// Public Domain

//Declares the comicObj outside of the ajax call to make the data accessible outside of the call.
var comicObj;

//Uses ajax to get data from the XKCD API
$.ajax({
  //URL of endpoint
  url: "https://xkcd.com/info.0.json",
  //No data/key/id needed
  data: {},
  //Getting data and not passing it
  type: "GET",
  //The endpoint is in JSON
  dataType: "json",
  //What happens when data is successfully retrieved. It stores the data in the comicObj and adds the comic of the day with its title and alt text in case the image no longer works.
  success: function(data){
    comicObj= data;
    $('#output').append('<h2>' +comicObj.title+ '</h2>');
    $('#output').append('<img src='+comicObj.img+' alt='+comicObj.alt+'\>');
  },
  //What happens when the data is not retrieved successfully. We saw this!
  error: function(jqXHR, textStatus, errorThrown){
    console.log("Get Rekt. Skill Issue: ", textStatus, errorThrown);
  },
});



//bonus task
//Creates the data object outside of the function so that it can be used outside of just one function
var betterComicObj;

//Function to change the comic and the buttons' functions
//Takes the desired number of the comic that the API will give information for as an arg
function getAndDisplayData(comicNum){
   //Creates a url to pass to the ajax call. It adds the comicNum arg as the index in the link
   newUrl = "https://xkcd.com/" +comicNum+ "/info.0.json";
   $.ajax({
      //Gets data from the URL created above
      url: newUrl,
      //No data needs to be passed
      data: {},
      //This call is getting data
      type: "GET",
      //The endpoint consists of json
      dataType: "json",
      //What happens when the data is successfully gotten
      //Changes comic heading, img, the img's alt, and the two buttons
      success: function(data){
         //Sets the comic object to contain the data on the comic's endpoint
         betterComicObj = data;
         //Clears out anything in the output div before adding more stuff
         $('#betterOutput').html("");
         //Adds the title of the comic within a header
         $('#betterOutput').append('<h3>' +betterComicObj.title+ '</h3>');
         //Adds the comic itself (img) through an img tag and gives it is corresponding alt text
         $('#betterOutput').append('<img src='+betterComicObj.img+' alt='+betterComicObj.alt+'\>');
         //Adds a button with the text "previous"
         $('#betterOutput').append('<button id ="prevButton">Previous</button>');
         //Adds a button with the text "next"
         $('#betterOutput').append('<button id="nextButton">Next</button>');
         //Adds a click event to the previous button.
         //When it is clicked, it calls the getAndDisplayData function and passes it the current
         //comic's number minus one
         $('#prevButton').click(function(){
            lessNum = betterComicObj.num - 1;
            getAndDisplayData(lessNum);
         });
         //Adds a click event to the next button.
         //When it is clicked, it calls the getAndDisplayData function and passes it the current
         //comic's number plus one
         $('#nextButton').click(function(){
            moreNum = betterComicObj.num + 1;
            getAndDisplayData(moreNum);
         });
      },
      //Throws an error if something goes wrong
      error: function(jqXHR, textStatus, errorThrown){
         console.log("Don't blame me!! Blame the people that made this. ", textStatus, errorThrown);
      }
   });
}

//Calls the getAndDisplayData function with the most recent comic at the time of creation
//So that something is present for the user to change
getAndDisplayData("2702");


