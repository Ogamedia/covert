Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
  post: {
    type: String,
    label: "Post",
    optional: true,
    max: 140
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
  },

   occasion: {
        type: String,
        autoform: {
            omit: true
        }
    }

}));