if (Meteor.isServer) {
	Meteor.publish("settings", function () {
		return Settings.find();
	});

	Meteor.methods({
  	'deleteCollection' : function() {
      Settings.remove({});
  	},

  	'insertCollection' : function(start, end) {
  		Settings.insert({startTime: start});
		  Settings.insert({endTime: end});
  	}
  	});
}