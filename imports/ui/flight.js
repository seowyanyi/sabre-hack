import { Template } from 'meteor/templating';
import './flight.html';

Template.flight.onRendered(function () {
    $(".owl-carousel").owlCarousel({
        autoPlay: 2000
    });
});