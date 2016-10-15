import { Template } from 'meteor/templating';
import './itinerary.html';

Template.itinerary.helpers({

});

Template.itinerary.onRendered(function () {
    $(".owl-carousel").owlCarousel({
        autoPlay: 2000
    });
});