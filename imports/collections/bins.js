import {Mongo} from'meteor/mongo';


Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
        createdAt: new Date(),
        content: '',
        sharedWith: [],
        ownerId: this.userId
    });
  },
  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },
  'bin.update': function(bin,newContent) {
    return Bins.update(bin._id, { $set: { content: newContent} } );
  }
});

export const Bins = new Mongo.Collection('bins');
