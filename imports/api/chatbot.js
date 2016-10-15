var stringSimilarity = require('string-similarity');
var PLAN = "plan";
var ROOMS = "rooms";
var FLIGHT = "flight";
var TIMES_SQUARE = "times square";
var NEW_YORK = "new york";
var UNKNOWN = "unknown";
var FUN_GALORE = "fun galore";
var REPLY = "reply";

function stringMatch(a, b) {
  return stringSimilarity.compareTwoStrings(a, b) >= 0.7;
}

function witLocation(sentence, callback) {
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
      else if (local_search_query && stringMatch(lsq_val, ROOMS)) {
        callback(ROOMS);
      }
      else if (local_search_query && stringMatch(lsq_val, FLIGHT)) {
        callback(FLIGHT);
      }
      else if ((local_search_query && stringMatch(lsq_val, TIMES_SQUARE)) || (location && stringMatch(loc_val, TIMES_SQUARE))) {
        callback(TIMES_SQUARE);
      }
      else if ((local_search_query && stringMatch(lsq_val, NEW_YORK)) || (location && stringMatch(loc_val, NEW_YORK))) {
        callback(NEW_YORK);
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

function commandParser(command) {
  console.log(command)
}

function executeSentence(sentence) {
  witLocation(sentence, commandParser)
}

Meteor.chatbot = {
  executeSentence: executeSentence
}