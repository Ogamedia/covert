Template.registerHelper('getImage',function(_id){
	return Images.findOne(_id);
});



Template.posts.helpers({
	noPost: function (counter) {
		if (counter > 0) {
			return false
		}else{
			return true
		};
	}
});