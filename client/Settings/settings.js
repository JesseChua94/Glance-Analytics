
if (Meteor.isClient) {
  Meteor.subscribe("settings");
	
}

Template.settings.events({
	'submit .settings': function(event) {
		event.preventDefault();
		var start = event.target.startHour.value;
		var end = event.target.endHour.value;
		Meteor.call("insertCollection", start, end);
	},

	'click #delete': function() {
		//console.log(Settings.find({startTime : {$exists: true}}).fetch());

		Meteor.call("deleteCollection");
	},

	'click #check': function() {
		console.log(Settings.find({}).count());
	}

});


