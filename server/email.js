Meteor.methods({
	emailer: function (to, from, subject, text) {

		this.unblock();

		console.log(to, from, subject, text)

		Email.send({
			to: to,
			from: from,
			subject: subject,
			text: text
		});
	}
});

Meteor.startup(function () {
	process.env.MAIL_URL = 'smtp://covertgrp@gmail.com:OgaAnimBan@smtp.google.com:465'
})