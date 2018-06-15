// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 6969;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

class Reservation{
    constructor(name,phoneNumber,email,key)
    {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.key = key;
    }
}

//list
var resAll = [];
var uniqueID = 1;

function populate(){
    // resAll.push(new Reservation("Jeff","8184714195","email@aol.com",uniqueID++));
    // resAll.push(new Reservation("Dan","8184724505","email@aol.com",uniqueID++));
    // resAll.push(new Reservation("Chatura","8184324595","email@aol.com",uniqueID++));
    // resAll.push(new Reservation("Jay","8184725295","email@aol.com", uniqueID++));
    // resAll.push(new Reservation("Jeff","8184724595","email@aol.com",uniqueID++));
}

populate();

app.get("/api/tables", function (req, res)
{   
    res.json(resAll);
});

 
// Create New Characters - takes in JSON input
app.post("/api/add", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;
    var tempR = new Reservation(req.body.name,req.body.phoneNumber,req.body.email,uniqueID++);
    console.log(req.body);
    resAll.push(tempR);
    res.send("Success fooo");

  });

//Web functionality
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Web functionality
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
}); 

//Web functionality
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


//Need this to run
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  