import { Template } from 'meteor/templating';
import './carousel.html';

Template.carousel.helpers({

});

Template.carousel.onRendered(function () {
    $(".owl-carousel").owlCarousel({
        autoPlay: 2000
    });
});