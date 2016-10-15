import { Template } from 'meteor/templating';
import './carousel.html';

Template.carousel.helpers({

});

Template.carousel.events({
  'click .get-this': function(event) {
    Meteor.chatbot.chooseHotelRoom();
  }
});

Template.carousel.onRendered(function () {
    $(".owl-carousel").owlCarousel({
        autoPlay: 2000
    });
});