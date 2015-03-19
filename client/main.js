Template.registerHelper('getImage',function(_id){
  return Images.findOne(_id);
});
