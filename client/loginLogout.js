Template.navbar.events({
 "click #logout": function(event){
     Meteor.logout(function() {
     Router.go('/');
   });
}
});
