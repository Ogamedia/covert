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


Router.route ('/events', function(){
	this.render('events');
	name: 'events'
});

Router.route ('/event', function(){
	this.render('event');
	name: 'event'
});

Router.route ('/post', function(){
	this.render('occasion');
	name: 'occasion'
});


Router.route ('/events/:id', function(){
	this.render('events');
	name: 'events'
});