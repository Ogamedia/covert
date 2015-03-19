/*
router style, initial configuration template
layoutTemplate will map to a layout template
notFoundTemplate will use a template named 404 or a name of your choice if you chose to change it
loadingTemplate will use a template with loading or a template

*/
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
				occasion: Posts.find({occassion: id}).fetch().reverse()
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
			console.log(ownerId.poster);
			return {
				id: id,
				comments: Comments.find({post: id}),
<<<<<<< HEAD
				occasion: Posts.find().fetch().reverse()
=======
				occasion: Posts.findOne(id),
				owner: 		Meteor.users.findOne(ownerId.poster)

>>>>>>> c13cf658407f48edbe3be5e62b0e8e22c32e6881
			}
		}
	});
});


AccountsTemplates.configureRoute('signIn', {
	name: 'signin',
    // path: '/',
    template: 'home',
    // layoutTemplate: 'myLayout',
    redirect: '/events',
<<<<<<< HEAD
});


=======
  });
>>>>>>> c13cf658407f48edbe3be5e62b0e8e22c32e6881
