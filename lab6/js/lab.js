myTransport=["bus","bike","feet","plane","car","train","private jet","flying saucer","canoe","scooter","river of tears"];
var myMainRide = {};
myMainRide.make = "Poorsche";
myMainRide.model = "BML";
myMainRide.color = "Chartreuse";
myMainRide.year = 2030;
myMainRide.age = 2022 - 2030;
document.writeln("Getting around: " + myTransport+ "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'),"</pre>");
