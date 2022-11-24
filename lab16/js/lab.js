
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
