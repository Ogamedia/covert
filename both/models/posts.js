Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
  occassion: {
    type: String,
    autoform: {
      omit: true
    }
  },
  
  post: {
    type: String,
    label: "Post",
    optional: true,
    max: 140,
    autoform: {
      rows: 5
    }
  },

  poster: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function(){
      return Meteor.userId();
    }
  },

  picture: {
        type: String,
        optional: true,
        autoform: {
            type: 'fileUpload',
            collection: 'Images'
        },
        label: 'choose file'
    },

  createdAt: {
    type: Date,
    label: 'Date',
    autoform: {
      omit: true
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  }

}));