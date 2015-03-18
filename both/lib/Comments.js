Comments = new Mongo.Collection("comments");

Comments.attachSchema(new SimpleSchema({
  comment: {
    type: String,
    label: "comment",
    optional: true,
    max: 140
  },

  commenter: {
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


   post: {
        type: String,
        autoform: {
            omit: true
        }
    }
}));