Events = new Mongo.Collection("events");

Events.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Events",
    optional: true,
    max: 140
  },

  creator: {
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
  }
}));