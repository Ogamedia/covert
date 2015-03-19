Meteor.publish('eventsPage', function () {
	return Events.find()
});

Meteor.publish('eventPage', function () {
	return Posts.find()
});

Meteor.publish('comments', function () {
	return Comments.find();
});

Meteor.publish('images', function(){
	return Images.find();
});