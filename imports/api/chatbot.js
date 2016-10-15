// Categorizes a sentence according to the possible actions the chatbot can handle
// 0. No match
//
// 1. Start planning
//
//
// 2. Places of interest
//
//
// 3. Accomodation
//
// 4. Flight
var stringSimilarity = require('string-similarity');
var THRESHOLD = 0.7;

function isCat1(words) {
  var CAT1 = ['plan', 'trip'];
  var j = 0;
  var matches = 0;

  for (var i=0; i < words.length; i++) {
    if(stringSimilarity.compareTwoStrings(words[i], CAT1[j]) >= THRESHOLD) {
      matches++;
      j++;
    }
    if (matches === CAT1.length) {
      return true;
    } else if (j === CAT1.length) {
      return false;
    }
  }

  return false;
}

function isCat2(words) {

}

function isCat3(words) {

}

function isCat4(words) {

}

function categorizeSentence(sentence) {
  var words = sentence.split(" ");
  if (isCat1(words)) {
    return 1;
  } else if (isCat2(words)) {
    return 2;
  } else if (isCat3(words)) {
    return 3;
  } else if (isCat4(words)) {
    return 4;
  } else {
    return 0;
  }
}

function executeSentence(sentence) {
  var category = categorizeSentence(sentence);
  console.log(category);
  return category
}

Meteor.chatbot = {
  executeSentence: executeSentence
}