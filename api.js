/**
 * Created by Xefke on 22/11/2016.
 */
//load dependencies
var express = require('express');
var parser = require('body-parser');

// load database
var database = require("./database");

// create webservice
var app = express();
app.use(parser.json());

// 01 // == MEASUREMENTS == ////
// GET requests on /measurements
app.get('/measurements', function (request, response) {
    response.send(database.allMeasurements());
});


// GET requests on /measurements with ID => /measurements/:id
app.get('/measurements/:id', function (request, response) {
    var id = request.params.id;
    console.log(id);
    var measurement = database.searchMeasurements(id);
    if (measurement.length > 0) {
        response.send(measurement); // if a measurement is found, return this measurement
    } else {
        response.status(404).send(); // if no measurement is found, return code 404 'page not found'
    }
});


// GET requests on /measurements with droneID => /measurements/drones/:droneid
app.get('/measurements/drones/:droneid', function (request, response) {
    var id = request.params.droneid;
    console.log(id);
    var measurements = database.measurementsByDrone(id);
    if (measurements.length > 0) {
        response.send(measurements); // if a measurement is found, return this measurement
    } else {
        response.status(404).send(); // if no measurement is found, return code 404 'page not found'
    }
});

// POST request on /measurements
app.post("/measurements", function (request, response) {
    var newMeasurement = request.body; // take in the JSON request body from the POST request
    console.log(newMeasurement);
    // add the measurement to the store
    database.addMeasurement(newMeasurement);
    response.status(201).location("/measurements/10011").send({redirect: "/measurements/"+newMeasurement.id}); //respond with the 201 status 'Created' and give the URL of the created measurement.
});

app.listen(4567);
console.log("server is running");