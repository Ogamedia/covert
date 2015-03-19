// AutoForm.hooks({
//   insertPostForm: {
//     formToDoc: function(doc, template) {
//       doc.occassion = Router.current().params._id
//       console.log(doc);
//       return doc
//     }
//   }
// });


AutoForm.addHooks(null, {
  onError: function (operation,error, ss) {
    alert(error);
  }
});

AutoForm.addHooks('insertPostForm', {
  formToDoc: function (doc, template) {
      console.log(doc);
      doc.occassion = Router.current().params._id
      console.log(doc);
  }
});