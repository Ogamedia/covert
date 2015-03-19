Meteor.publish('eventsPage', function () {
	return Events.find()
});

Meteor.publish('eventPage', function () {
	return Posts.find()
});