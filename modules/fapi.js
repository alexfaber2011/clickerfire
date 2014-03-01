var Firebase = require('firebase');


//, startTime, endTime, numWeeks, days
exports.createEvent = function(eventName){
	var dataRef = new Firebase('https://resplendent-fire-2962.firebaseio.com/class/' + eventName);
	//Find existing event by name
	dataRef.once('value', function(snapshot){
		//console.log(snapshot);
		if(snapshot.val() === null){
			console.log("calling insert");
			insertEvent(eventName, dataRef);
		}
		else{
			console.log('returned class ' + snapshot.val().score);		
		}
	});

	//Create if not exist
	function insertEvent(dataRef){
		dataRef.set({score: -1}, function(err){
			console.log("error setting the event");
		});
		console.log("inserted");
	}
}

