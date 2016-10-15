import { Template } from 'meteor/templating';
import './message.html';

Template.message.helpers({
  isReceived(username) {
    return username !== Meteor.user().username;
  }
});