/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
               Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 6, 2022
 * Lab 6 Resubmit
 */


//this is an array
 var myTransport = ["Walking", "Bus Ride", "Biking", "Nissan Leaf", "Honda"];

//this is an object
 var myMainRide = {
    color: "white",
    make: "Nissan",
    model: "Leaf",
    year: 2019,
    age: function () {
        return 2022 - this.year;
    }
 }

//neatly printing an array vs an object
 document.writeln("Ways we get around: " + myTransport +  "<br>");

 document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
