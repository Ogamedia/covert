AutoForm.hooks({
  insertPostForm: {
    formToDoc: function(doc, template) {
      doc.occassion = Router.current().params._id
      console.log(doc);
      return doc
    }
  },

  insertCommentForm: {
    formToDoc: function(doc, template) {
      doc.post = Router.current().params._id
      return doc
    }
  }
});


AutoForm.addHooks(null, {
  onError: function (operation,error, ss) {
    alert(error);
  }
});

