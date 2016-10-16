var stringSimilarity = require('string-similarity');
var PLAN = "plan";
var ROOMS = "rooms";
var FLIGHT = "flight";
var NEW_YORK = "new york";
var UNKNOWN = "unknown";
var FUN_GALORE = "fun galore";
var REPLY = "reply";
var DATE_TIME = "datetime";
var PLANNER_ID_YY = '';
import { Messages } from '../api/messages.js';
import {backupFlights} from  './backupFlights.js'

function stringMatch(a, b) {
  return stringSimilarity.compareTwoStrings(a, b) >= 0.7;
}

// Sends a message as the bot
// text: the text message you want to send
// type: 1 (normal), type: 2 (planner)
// metaData: in json format
function botMessage(text, type, metaData) {
  metaData = metaData || [{}];
  return Messages.insert({
    text,
    type: type,
    createdAt: new Date(),
    owner: "chatplanner",
    username: "chatplanner",
    metaData: metaData
  });
}

function updatePlannerField(field, value) {
  var plannerMessageId = Session.get('plannerMessageId');
  var plannerMessage = {};
  if (!plannerMessageId) {
    plannerMessageId = PLANNER_ID_YY;
  }

  plannerMessage = Messages.findOne(plannerMessageId);
  var planner = {}
  if (plannerMessage && plannerMessage['metaData']) {
    planner = plannerMessage['metaData'][0];
    planner[field] = value;
    Messages.update(plannerMessageId, {
        $set: { metaData: [planner] },
      });
  }
}

function getPlannerField() {
  if (plannerMessage && plannerMessage['metaData']) {
    var plannerMessageId = Session.get('plannerMessageId');
    var plannerMessage = Messages.findOne(plannerMessageId);
    return plannerMessage['metaData'][0];
  }
}

function toHumanReadableDateTime(date) {
  var mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  var s = date.getDate() + " " + mlist[date.getMonth()] + " " + date.getFullYear();
  if (date.getHours() !== 0 || date.getMinutes() !== 0) {
    s = s + " " + date.getHours() + ":" + date.getMinutes();
  }
  return s;
}

// Returns array of packages for the carousel
function getNewYorkPackages() {
 return [
   {
      thumbnail: 'images/itinerary_one_photo.jpg',
      price: '$200',
      title: 'Breath Taker',
      description: 'Enjoy the sights and sounds of our sight seeing package by starting the morning with...'
   },
   {
      thumbnail: 'images/itinerary_two_photo.jpg',
      price: '$400',
      title: 'Fun Galore',
      description: 'Indulge in the sophistication of The Metropolitian Museum of Art as we bring you through timeless stories...'
   },
   {
      thumbnail: 'images/itinerary_three_photo.jpg',
      price: '$400',
      title: 'Further Away',
      description: 'Immerse yourself...'
   },
   {
      thumbnail: 'images/itinerary_one_photo.jpg',
      price: '$200',
      title: 'Breath Taker',
      description: 'Enjoy the sights and sounds of our sight seeing package by starting the morning with...'
   },
   {
      thumbnail: 'images/itinerary_two_photo.jpg',
      price: '$400',
      title: 'Fun Galore',
      description: 'Indulge in the sophistication of The Metropolitian Museum of Art as we bring you through timeless stories...'
   },
   {
      thumbnail: 'images/itinerary_three_photo.jpg',
      price: '$400',
      title: 'Further Away',
      description: 'Immerse yourself...'
   }
 ];
}

function formatAMPM(dateStr) {
  var date = new Date(dateStr);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function formatFlights(resp) {
  var itineraries = resp.PricedItineraries;
  var temp = [];
  itineraries.forEach(function (itinerary, i) {
    var AirItinerary = itinerary.AirItinerary;
    var origin = AirItinerary.OriginDestinationOptions.OriginDestinationOption[0];
    var originFlightSegments = origin.FlightSegment;
    var departureStart = originFlightSegments[0].DepartureDateTime;
    var departureEnd = originFlightSegments[originFlightSegments.length-1].DepartureDateTime;

    var airline = originFlightSegments[0].OperatingAirline.Code + originFlightSegments[0].OperatingAirline.FlightNumber;

    var dest = AirItinerary.OriginDestinationOptions.OriginDestinationOption[1];
    var destFlightSegments = dest.FlightSegment;
    var returnStart = destFlightSegments[0].DepartureDateTime;
    var returnEnd = destFlightSegments[destFlightSegments.length-1].DepartureDateTime;

    var price = itinerary.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount;

    if (i === 0) {
      updatePlannerField('airline', airline);
      updatePlannerField('airline_price', '$' + price);
    }

    temp.push({
      airline: airline,
      depart: {
        start: formatAMPM(departureStart),
        airportStart: 'SIN',
        end: formatAMPM(departureEnd),
        airportEnd: 'JFK'
      },
      return: {
        start: formatAMPM(returnStart),
        airportStart: 'JFK',
        end: formatAMPM(returnEnd),
        airportEnd: 'SIN'
      },
      price: '$' + price
    })

  });
  return temp;
}

// Returns array of flights for the carousel
function getFlights(callback) {
  $.ajax({
    url: 'https://api.test.sabre.com/v1/shop/flights',
    headers: {
      'Authorization': 'Bearer T1RLAQLSUKs3sdHffd0f9ck0WK70g65twhDJ8wH2LqfKg1ngxXwlYxuKAACgHeo9cGClaa8znY+WTq/hnJt/Ka/Rkw9Ql2HXRVPaZssEM59Vf1D46guqz8kqITZ20zGdA0wFL8X5dPAP8MlMuMNs9Qr78Z2UnIYnDZETMG6VEwL0OCBaCa3+9A0YMnnEzKklOQBuf01QLSaB8jpvZpygMpnOUmhtC7VENDNwZJZUz5BJVPViK/ddTmiu0dOhAG2ll+Ca3Y7fU2LlEbeTWA**'
    },
    data: {
      origin: 'SIN',
      destination: 'JFK',
      departuredate: '2016-10-20',
      returndate: '2016-10-27',
      limit: 6,
      offset: 1,
      sortby: 'totalfare',
      order: 'asc',
      pointofsalecountry: 'SG'
    },
    success: function(resp) {
      callback(formatFlights(resp));
    },
    error: function(err) {
      console.log(err);
      callback(formatFlights(backupFlights));
    }
  });
}

function formatHotels(resp) {
  var hotels = resp.hotelList;
  var temp = []
  hotels.forEach(function (hotel, i) {
    var thumbnail = 'https://images.trvl-media.com/' + hotel. thumbnailUrl;
    var price = hotel.lowRateInfo.formattedTotalPriceWithMandatoryFees;
    var title = hotel.name;
    var location = hotel.address;
    var stars = parseInt(hotel.hotelStarRating);
    if (i === 0) {
      updatePlannerField('hotel', title);
      updatePlannerField('hotel_price', price);
    }
    temp.push({
      thumbnail: thumbnail,
      price: price,
      title: title,
      location: location,
      stars: stars
    })
  });
  return temp;
}

function getHotels(callback) {
  $.ajax({
    url: 'http://terminal2.expedia.com:80/x/mhotels/search?city=NYC&resultsPerPage=6&checkInDate=2016-12-01&checkOutDate=2016-12-03&room1=2&apikey=48RGOAbNOn84uIQS94ppK9uEBRtNdzYL',
    success: function(resp) {
      callback(formatHotels(resp));
    },
    error: function(err) {
      console.log(err);
      callback([{
      thumbnail: 'images/hotel_one_photo.jpg',
      price: '$754.30',
      title: 'The Roosevelt Hotel, New York City',
      location: '45 E 45th Street',
      stars: 4
   },
   {
      thumbnail: 'images/hotel_two_photo.jpg',
      price: '$598.00',
      title: 'YOTEL New York at Times Square',
      location: '570 Tenth Avenue',
      stars: 4
   },
   {
      thumbnail: 'images/hotel_three_photo.jpg',
      price: '$758.41',
      title: 'The Belvedere Hotel',
      location: '319 W 48th St',
      stars: 3
   },
   {
      thumbnail: 'images/hotel_one_photo.jpg',
      price: '$754.30',
      title: 'The Roosevelt Hotel, New York City',
      location: '45 E 45th Street',
      stars: 4
   },
   {
      thumbnail: 'images/hotel_two_photo.jpg',
      price: '$598.00',
      title: 'YOTEL New York at Times Square',
      location: '570 Tenth Avenue',
      stars: 4
   },
   {
      thumbnail: 'images/hotel_three_photo.jpg',
      price: '$758.41',
      title: 'The Belvedere Hotel',
      location: '319 W 48th St',
      stars: 3
   }])
    }
  });
}

function witLocation(sentence, callback, msgId) {
  sentence = sentence.toLowerCase();
  $.ajax({
    url: 'https://api.wit.ai/message',
    data: {
      'q': sentence,
      'access_token' : 'KFUBRDV7HYYJEQ2ATLGFFDBUNSCAMVYE'
    },
    method: 'GET',
    success: function(data) {
      var entities = data.entities;
      var intent = entities.intent;
      var location = entities.location;
      var datetime = entities.datetime;
      var local_search_query = entities.local_search_query;
      var lsq_val = '';
      var loc_val = '';
      var intent_val = '';
      if (local_search_query) {
        lsq_val = local_search_query[0].value.toLowerCase()
      }
      if (location) {
        loc_val = location[0].value.toLowerCase();
      }
      if (intent) {
        intent_val = intent[0].value.toLowerCase();
      }

      if (intent && stringMatch(intent[0].value, PLAN)) {
        callback(PLAN);
      }
      else if (datetime && datetime[0].value) {
        var humanReadable = toHumanReadableDateTime(new Date(datetime[0].value));
        callback(DATE_TIME, humanReadable, msgId);
      }
      else if (local_search_query && stringMatch(lsq_val, ROOMS)) {
        callback(ROOMS);
      }
      else if (local_search_query && stringMatch(lsq_val, FLIGHT)) {
        callback(FLIGHT);
      }
      else if ((local_search_query && stringMatch(lsq_val, NEW_YORK)) || (location && stringMatch(loc_val, NEW_YORK))) {
        callback(NEW_YORK, null, msgId);
      }
      else if ((intent && stringMatch(intent_val, FUN_GALORE)) || (local_search_query && stringMatch(lsq_val, FUN_GALORE))) {
        callback(FUN_GALORE);
      }
      else if (intent && intent_val === "reply") {
        callback(REPLY);
      }
      else if (sentence.includes('ny')) {
        callback(NEW_YORK);
      }
      else {
        callback(UNKNOWN);
      }
    },
    error: function(xhr, error) {
      console.log(error)
    }
  });
}

function commandParser(command, dateStr, msgId) {
  console.log(command);
  if (command === PLAN) {
    var plannerMessageId = botMessage("", 2, [{
      to: '',
      from: 'Singapore',
      depart: '',
      return: ''
    }]);
    Session.set('isEditingPlanner', true);
    PLANNER_ID_YY = plannerMessageId;
    Session.set('plannerMessageId', plannerMessageId);
    Session.set('plannerEditField', 'to');
  }
  else if (command === NEW_YORK) {
    if (Session.get('isEditingPlanner')) {
      updatePlannerField('to', 'New York City');
      Session.set('plannerEditField', 'depart');
    }
  }
  else if (command === DATE_TIME) {
    if (Session.get('isEditingPlanner')) {
      if (Session.get('plannerEditField') === 'depart') {
        updatePlannerField('depart', dateStr);
        Session.set('plannerEditField', 'return');
        Messages.remove(msgId);
      } else if (Session.get('plannerEditField') === 'return') {
        updatePlannerField('return', dateStr);
        Session.set('isEditingPlanner', false);
        Messages.remove(msgId);

        var carouselInfo = getNewYorkPackages();

         Meteor.setTimeout(function() {
          botMessage("These are our best suggestions for you and your friend. Pick one that you like!", "carousel", carouselInfo);
          }, 2000);
      }
    }
  }
  else if (command === FUN_GALORE) {
    getFlights(function(flights) {
      console.log(flights);
      Session.set('flights', flights);
      botMessage("These are our best suggestions for you and your friend. Pick one that you like!", 'flight', flights);
    });
  }
  else if (command === ROOMS) {
    getHotels(function(rooms) {
      console.log(rooms);
      Session.set('rooms', rooms);
      botMessage("These are our best suggestions for you and your friend. Pick one that you like!", 'hotel', rooms);
    });
  }
}

function stripDollarSign(priceStr) {
  return parseFloat(priceStr.replace(/\s/g, '').slice(1));
}

function getFinalItinerary() {
  var planner = getPlannerField();
  var totalPrice = 400 + stripDollarSign(planner['airline_price']) + stripDollarSign(planner['hotel_price']);
  return [{
          to: planner['to'],
          from: planner['from'],
          depart: planner['depart'],
          return: planner['return'],
          package: {
            name: 'Fun Galore',
            price: '$400'
          },
          flight: {
            name: planner['airline'],
            price: planner['airline_price']
          },
          hotel: {
            name: planner['hotel'],
            price: planner['hotel_price']
          },
          total: '$' + totalPrice
        }];
}

function chooseHotelRoom() {
  Meteor.setTimeout(function() {
    botMessage("Congrats, your travel plan is complete!", 1);
  }, 500);

  Meteor.setTimeout(function() {
    var finalStuff = getFinalItinerary();
    console.log(finalStuff);
    botMessage("", 'itinerary', finalStuff);
  }, 3000);

}


function executeSentence(sentence, msgId) {
  console.log('executeSentence ' + sentence + ' ' + msgId)
  witLocation(sentence, commandParser, msgId)
}

Meteor.chatbot = {
  executeSentence: executeSentence,
  chooseHotelRoom: chooseHotelRoom
}