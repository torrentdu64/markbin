import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function(){
    return Bins.find({ownerId : this.userId});
  });

  Meteor.publish('sharedBins', function (){
    const user = Meteor.users.findOne(this.userId);
    if(!user) {return ;}
  })
});
