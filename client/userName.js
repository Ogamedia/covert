Template.registerHelper('userName', function(poster){
	return Meteor.users.findOne(poster).username
})