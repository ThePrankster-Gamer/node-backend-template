const express = require("express"); // Importing Express

const app = express(); // Creating an Express App

const port = 8000; // You can change this

// Creating the necessary routes
app.get("/", (req, res) => {
    res.send("Server is Running!");
});

// Setting our server to listen on a specific port
app.listen(port, (err) => {
    if(!err)
        console.log("Server started on port "+port);
    else
        console.log("Server failed to start! Error: "+err);
});
