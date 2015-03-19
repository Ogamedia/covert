Meteor.publish('eventsPage', function () {
	return Events.find()
});

Meteor.publish('eventPage', function () {
	return Posts.find()
});

Meteor.publish('comments', function () {
	return Comments.find();
});

<<<<<<< HEAD
Meteor.publish('images', function(){
	return Images.find();
});
=======
Meteor.publish('images');

Meteor.publish('users',function(){
	return Meteor.users.find()
})
>>>>>>> c5069f0e8395d3c8eb42c7334f7f21deb6892876
