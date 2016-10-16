import { Template } from 'meteor/templating';
import './message.html';

Template.message.helpers({
  isReceived(username) {
    return username !== Meteor.user().username;
  },
  isCarousel(type) {
    if(type == 'carousel') return true;
  },
    isTwo(type) {
    if(type == 2) return true;
  },
    isItinerary(type) {
    if(type == 'itinerary') return true;
  },
      isFlight(type) {
    if(type == 'flight') return true;
  },
  isHotel(type) {
    if(type == 'hotel') return true;
  }
});