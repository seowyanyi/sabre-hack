import { Template } from 'meteor/templating';
import './hotel.html';

Template.hotel.events({
  'click .get-this': function(event) {
    Meteor.chatbot.chooseHotelRoom();
  }
});