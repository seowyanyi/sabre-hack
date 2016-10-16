import { Template } from 'meteor/templating';
import './body.html';
import './message.js';
import './carousel.js';
import './planner.js';
import './itinerary.js';
import './flight.js';
import { Messages } from '../api/messages.js';

function isSameAsPrevious(prevIsReceived, msg) {
  return prevIsReceived === isReceived(msg);
}

Template.body.onRendered(function () {
});

Template.body.helpers({
  messages() {
    return Messages.find();
  }
});

Template.body.events({
  'submit .new-message': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    var msgId = Messages.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });

    Meteor.chatbot.executeSentence(text, msgId);

    // Clear form
    target.text.value = '';

    // scroll to last message
    $('.panel-body').scrollTop(Messages.find().count()*100)
      // console.log(Messages.find().count()*100);
  }
});