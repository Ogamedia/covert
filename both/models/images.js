var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection ("images", {
	stores:[imageStore],
	filter: {
    maxSize: 10000000, // in bytes
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png', 'jpeg', 'jpg', 'gif']
    },
    onInvalid: function (message) {
      if (Meteor.isClient) {
        alert(message);
      } else {
        console.log(message);
      }
    }
  }
});