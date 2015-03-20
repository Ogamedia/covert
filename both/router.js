
Router.configure({
	layoutTemplate: 'layout',
	trackPageView: true,
	// waitOn: function(){ return [Meteor.subscribe('users')] }
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

Router.route ('/profile', function(){
	this.render('profile');
	name: 'profile'
});


Router.route ('/event/:_id', function(){
	this.render('event');
	name: 'event'
});

Router.map( function () {
	this.route('events', {
		path: '/events',
		name: 'events',
		layoutTemplate: 'userLayout',

		data: function() {
			return {
				items: Events.find().fetch().reverse()
			}
		}
	});
});

Router.map( function () {
	this.route('event', {
		path: '/events/:_id',
		name: 'event',
		layoutTemplate: 'userLayout',

		data: function() {
			var id = this.params._id
			return {
				items: Events.findOne(id),
				occasion: Posts.find({occassion: id}).fetch().reverse(),
				counter: Posts.find({occassion: id}).count()
			}
		}
	});
});

Router.map( function () {
	this.route('post', {
		path: '/post/:_id/',
		name: 'post',
		layoutTemplate: 'userLayout',

		data: function() {
			var id = this.params._id;
			var ownerId = Posts.findOne(id);
			return {
				id: id,
				comments: Comments.find({post: id}),
				occasion: Posts.find().fetch().reverse(),
				owner: Meteor.users.findOne(ownerId.poster)

			}
		}
	});
});


// AccountsTemplates.configureRoute('signIn', {
// 	name: 'signin',
//     template: 'home',
//     redirect: '/events',
// });

// AccountsTemplates.configureRoute('signUp', {
// 	name: 'signup',
//     template: 'home',
//     redirect: '/events',
// });

