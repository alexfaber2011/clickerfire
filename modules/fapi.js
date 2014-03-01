var Firebase = require('firebase');

//, startTime, endTime, numWeeks, days
exports.createEvent = function(eventName){
	//Find existing event by name
	var dataRef = new Firebase('https://resplendent-fire-2962.firebaseio.com/class/' + eventName);
	dataRef.once('value', function(snapshot) {
	  console.log('returned class ' + snapshot.val().name.value);
	});

	//Create if not exist
}