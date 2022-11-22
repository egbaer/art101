//Comment Block

$('#activate').click(function(){
   $.ajax({
      url: "https://api.chucknorris.io/jokes/random",
      data: {},
      type: "GET",
      dataType: "json",
      success: function(data){
         console.log(data);
         console.log(data.value);
         $('#output').html(data.value);
      },
      error: function (jqXHR, textStatus, errorThrown){
         console.log("Get Rekt: ", textStatus, errorThrown);
      }
   });

});

//https://stackoverflow.com/questions/18938180/how-to-get-the-html-of-a-div-on-another-page-with-jquery-ajax
$('#otherActivate').click(function(){
   $.ajax({
      url: "https://www.chickensmoothie.com/",
      data: {},
      type: "GET",
      dataType: "html",
      success: function(data){
         console.log(data);
         $('#otherOutput').load("https://www.chickensmoothie.com/ div#welcome")
         $('#othererOutput').load("https://www.chickensmoothie.com/ li.reqjs");
         $('#otherestOutput').load("https://www.chickensmoothie.com/ div#newslist")
         
      },
      error: function (jqXHR, textStatus, errorThrown){
         console.log("Get Rekt: ", textStatus, errorThrown);
      }
   });

});
