Meteor.publish('eventsPage', function () {
	return Events.find()
});

Meteor.publish('eventPage', function () {
	return Posts.find()
});

Meteor.publish('comments', function () {
	return Comments.find();
});

Meteor.publish('images');

Meteor.publish('users',function(){
  return Meteor.users.find()
})

