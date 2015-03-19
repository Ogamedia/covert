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

Meteor.publish('users',function(){
<<<<<<< HEAD
	return Meteor.users.find()
})
=======
  return Meteor.users.find()
})

>>>>>>> c13cf658407f48edbe3be5e62b0e8e22c32e6881
