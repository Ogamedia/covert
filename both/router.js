/*
router style, initial configuration template
layoutTemplate will map to a layout template
notFoundTemplate will use a template named 404 or a name of your choice if you chose to change it
loadingTemplate will use a template with loading or a template

*/
Router.configure({
	layoutTemplate: 'layout',
	trackPageView: true
	// onBeforeAction: function(){
	// 	GAnalytics.pageView(this.page);
	// 	this.next()
	// }
	// notFoundTemplate: '404',
	// loadingTemplate: 'loading'
});

// ============================================== routes ========================================================================

//  route one basic
Router.route ('/', function(){
	this.render('home');
	name: 'home'
});


// Router.route ('/events', function(){
// 	this.render('events');
// 	name: 'events'
// });

Router.route ('/event/:_id', function(){
	this.render('event');
	name: 'event'
});

Router.map( function () {
	this.route('events', {
		path: '/events',
		name: 'events',
		layoutTemplate: 'userLayout',

		// waitOn: function(){
		// 	var pass = this.params._id;
		// 	return [
		// 		Meteor.subscribe('users', pass)			]
		// },

		data: function() {
			return {
				items: Events.find()
			}
		}
	});
});

Router.map( function () {
	this.route('event', {
		path: '/events/:_id',
		name: 'event',
		layoutTemplate: 'userLayout',

		// waitOn: function(){
		// 	var pass = this.params._id;
		// 	return [
		// 		Meteor.subscribe('users', pass)			]
		// },

		data: function() {
			var id = this.params._id
			return {
				id: id,
				occasion: Posts.find()
			}
		}
	});
});

