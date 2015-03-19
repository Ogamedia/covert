Emails.allow({
	insert: function (userId, doc) {
		return true
	}
});

Posts.allow({
	insert: function (userId, doc) {
		return true
	},
	remove: function (userId, doc) {
		return true
	}
});

Events.allow({
	insert: function (userId, doc) {
		return true
	},
	update: function (userId, doc, fields, modifier) {
		return true
	},
	remove: function (userId, doc) {
		return true
	}
});


Comments.allow({
	insert: function (userId, doc) {
		return true
	},
	remove: function (userId, doc) {
		return true
	}
});