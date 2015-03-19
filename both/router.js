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
			var id = this.params._id
			return {
				id: id,
				comments: Comments.find({post: id}),
				occasion: Posts.find().fetch().reverse()
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
});


// Router.onBeforeAction(function(pause) {
// if (!Meteor.user()) {
// // pause();
// alert("you need to be logged-in to view this page, Redirecting you to Home!")
// Router.go('\home');
// }
// else{
// this.next();
// }
// }, {except: ['home','about','jobs', 'dashboard']});