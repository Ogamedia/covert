Template.registerHelper('getImage',function(_id){
  return Images.findOne(_id);
});

Template.launchPage.events({
	'submit #support': function () {
		var name = event.target.name.value;
		var email = event.target.email.value;
		var message = event.target.message.value;
		Meteor.call('emailer',  email, "covertgrp@gmail.com", name, email );
	}
});
