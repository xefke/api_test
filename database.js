// create some kind of database to test with
//JSON array in variable as text
var measurementsJSON = '{"measurements":['+
	'{"type": "probe", "timestamp": "2016-10-23T17:00:00Z", "rssi": -46, "droneid":1, "location":"C1.28","id": 10001},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:05:00Z", "rssi": -84, "droneid":2, "location":"BICC","id": 10002},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:10:00Z", "rssi": -32, "droneid":1, "location":"C1.28","id": 10003},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:15:00Z", "rssi": -68, "droneid":2, "location":"BICC","id": 10004},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:20:00Z", "rssi": -53, "droneid":1, "location":"C1.28","id": 10005},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:25:00Z", "rssi": -82, "droneid":2, "location":"BICC","id": 10006},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:30:00Z", "rssi": -45, "droneid":1, "location":"C1.28","id": 10007},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:35:00Z", "rssi": -20, "droneid":2, "location":"BICC","id": 10008},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:40:00Z", "rssi": -29, "droneid":1, "location":"C1.28","id": 10009},'+
	'{"type": "probe", "timestamp": "2016-10-23T17:45:00Z", "rssi": -27, "droneid":2, "location":"BICC","id": 10010}'+
']}';

//create javascript object to work with
var database = JSON.parse(measurementsJSON);
    //console.log(database.measurements.length);

module.exports = {

   allMeasurements :  function allMeasurements() {
       //declare variables
       var results = [];
       var i;
       //run through all data
       for (i in database.measurements) {
           results.push(database.measurements[i]);
       }
       //return found data
       return(results);
   },


    //old function from testing stage in terminal
    /*
    allMeasurements :  function allMeasurements() {
        var i;
        console.log('\nAll Measurements\n================');
        for (i in database.measurements) {
            console.log('ID: ' + database.measurements[i].id +
                ' RSSI: ' + database.measurements[i].rssi +
                ' Location: ' + database.measurements[i].location +
                ' DroneID: ' + database.measurements[i].droneid);
        }
    },
    */

    searchMeasurements : function searchMeasurements(id) {
        var results = [];
        var i;
        for (i in database.measurements) {
            if (database.measurements[i].id == id) {
                results.push(database.measurements[i])
            }
        }
        // return found data
        return(results);
    },

    //old function from testing stage in terminal
    /*
    searchMeasurements : function searchMeasurements(id) {
        var results = [];
        var i;
        for (i in database.measurements) {
            if (database.measurements[i].id == id) {
                results.push(database.measurements[i])
            }
        }

        console.log('\nSpecific Measurement\n====================');

        for (i in results) {
            console.log('ID: ' + results[i].id +
                ' RSSI: ' + results[i].rssi +
                ' Location: ' + results[i].location +
                ' DroneID: ' + results[i].droneid);
        }
    },
    */


    measurementsByDrone : function measurementsByDrone(id) {
        var results = [];
        var i;
        for (i in database.measurements) {
            if (database.measurements[i].droneid == id) {
                results.push(database.measurements[i])
            }
        }
        return (results);
    },


    //old function from testing stage in terminal
    /*
     measurementsByDrone : function measurementsByDrone(id) {
     var results = [];
     var i;
     for (i in database.measurements) {
     if (database.measurements[i].droneid == id) {
     results.push(database.measurements[i])
     }
     }

     console.log('\nSpecific Measurement by Drone ID\n================================');

     for (i in results) {
     console.log('ID: ' + results[i].id +
     ' RSSI: ' + results[i].rssi +
     ' Location: ' + results[i].location);
     }
     }
     */

    addMeasurement : function (newMeasurement) {
        var i = database.measurements.length;
        var lastID = database.measurements[i-1].id;
        var newID = lastID + 1;
        newMeasurement.id = newID;
        database.measurements.push(newMeasurement);
    }
};



