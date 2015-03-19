Template.launchPage.events({
	'submit form': function(event){

		event.preventDefault();
		var email = event.target.email.value;
		document.getElementById("emailForm").reset();


		Emails.insert({address: email});

		Router.go('/success')

		// Meteor.call('emailer', "yeboahmedia@gmail.com", "prince@meltwater.org", "subject", email);
	}
})



Template.registerHelper('getImage',function(_id){
  console.log(Images.findOne(_id));
  return Images.findOne(_id);
});