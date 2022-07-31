
var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<h3>Smart Devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile Phones</li>"
        +"<li>Hololens</li>"
        +"<li>Smart watches</li>"
        +"<li>Gaming consoles</li>"
        +"</ol>"
    );
});


app.get("/aboutus",(req, res)=>{
    res.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<h3>Doing things extraordinarilly</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Chief Mentor: Ravi Tambde</li>"
        +"<li>Director</li>"
        +"<li>Teachers</li>"
        +"<li>Expert</li>"
        +"</ol>"
    );
});

var server=app.listen(9000);
console.log("vijay sales online shopping running on port 9000");