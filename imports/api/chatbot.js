var stringSimilarity = require('string-similarity');
var PLAN = "plan";
var ROOMS = "rooms";
var FLIGHT = "flight";
var NEW_YORK = "new york";
var UNKNOWN = "unknown";
var FUN_GALORE = "fun galore";
var REPLY = "reply";
var DATE_TIME = "datetime";

import { Messages } from '../api/messages.js';

function stringMatch(a, b) {
  return stringSimilarity.compareTwoStrings(a, b) >= 0.7;
}

// Sends a message as the bot
// text: the text message you want to send
// type: 1 (normal), type: 2 (planner)
// metaData: in json format
function botMessage(text, type, metaData) {
  metaData = metaData || {};
  return Messages.insert({
    text,
    type: type,
    createdAt: new Date(),
    owner: "eaves",
    username: "Eaves",
    metaData: metaData
  });
}

function updatePlannerField(field, value) {
  var plannerMessageId = Session.get('plannerMessageId');
  var plannerMessage = Messages.findOne(plannerMessageId);
  console.log(plannerMessage);
  plannerMessage['metaData'][field] = value;
  console.log(plannerMessage);
  Messages.update(plannerMessageId, {
      $set: { metaData: plannerMessage['metaData'] },
    });
}

function toHumanReadableDateTime(date) {
  var mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  return date.getDate() + " " + mlist[date.getMonth()] + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
}

// Returns array of packages for the carousel
function getNewYorkPackages() {
 return [
   {
      thumbnail: 'images/itinerary_one_photo.jpg',
      price: '$200',
      title: 'Breath Taker'
      description: 'Enjoy the sights and sounds of our sight seeing package by starting the morning with...'
   },
   {
      thumbnail: 'images/itinerary_two_photo.jpg',
      price: '$400',
      title: 'Fun Galore'
      description: 'Indulge in the sophistication of The Metropolitian Museum of Art as we bring you through timeless stories...'
   },
   {
      thumbnail: 'images/itinerary_three_photo.jpg',
      price: '$400',
      title: 'Further Away'
      description: 'Immerse yourself...'
   }
 ];
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
      else if (intent && stringMatch(intent_val, FUN_GALORE)) {
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
    var plannerMessageId = botMessage("", 2, {
      to: '',
      from: 'Singapore',
      depart: '',
      return: ''
    });
    Session.set('isEditingPlanner', true);
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
        botMessage("These are our best suggestions for you and your friend. Pick one that you like!", "carousel", carouselInfo);
      }
    }
  }
  else {

  }
}

function executeSentence(sentence, msgId) {
  witLocation(sentence, commandParser, msgId)
}

Meteor.chatbot = {
  executeSentence: executeSentence
}