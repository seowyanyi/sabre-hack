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
  metaData = metaData || [{}];
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
  var planner = plannerMessage['metaData'][0];
  planner[field] = value;
  Messages.update(plannerMessageId, {
      $set: { metaData: [planner] },
    });
}

// function getLatestItinerary() {
//   return Itinerary.findOne({}, {sort: {DateTime: -1, limit: 1}});
// }

function toHumanReadableDateTime(date) {
  var mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  var s = date.getDate() + " " + mlist[date.getMonth()] + " " + date.getFullYear();
  if (date.getHours() !== "0" || date.getMinutes() !== "0") {
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


// Returns array of flights for the carousel
function getFlights() {
  var itineraries = hardcoded_flights.PricedItineraries;
  var temp = [];
  itineraries.forEach(function (itinerary) {
    var AirItinerary = itinerary.AirItinerary;
    var origin = AirItinerary.OriginDestinationOptions.OriginDestinationOption[0];
    var originFlightSegments = origin.FlightSegment;
    var departureStart = originFlightSegments[0].DepartureDateTime;
    var departureEnd = originFlightSegments[originFlightSegments.length-1].DepartureDateTime;

    var dest = AirItinerary.OriginDestinationOptions.OriginDestinationOption[1];
    var destFlightSegments = dest.FlightSegment;
    var returnStart = destFlightSegments[0].DepartureDateTime;
    var returnEnd = destFlightSegments[destFlightSegments.length-1].DepartureDateTime;

    var price = itinerary.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount;
    temp.push({
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

  console.log(temp)

  return temp;
}

function getHotels() {
 return [
   {
      thumbnail: 'images/hotel_one_photo.jpg',
      price: '$200',
      title: 'Breath Taker',
      location: 'Broadway - Times Square',
      stars: 4
   },
   {
      thumbnail: 'images/hotel_two_photo.jpg',
      price: '$200',
      title: 'Breath Taker',
      location: 'Broadway - Times Square',
      stars: 4
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
    Meteor.setTimeout(function() {
      botMessage("These are our best suggestions for you and your friend. Pick one that you like!", 'flight', getFlights());
    }, 2000);
  }
  else if (command === ROOMS) {
    Meteor.setTimeout(function() {
      botMessage("These are our best suggestions for you and your friend. Pick one that you like!", 'hotel', getHotels());
    }, 2000);
  }
}



function getFinalItinerary() {
  return [{
          to: '',
          from: 'Singapore',
          depart: '',
          return: '',
          package: {
            name: '',
            price: '0'
          },
          flight: {
            name: '',
            price: '0'
          },
          hotel: {
            name: '',
            price: '0'
          },
          total: '0'
        }];
}

function chooseHotelRoom() {
  Meteor.setTimeout(function() {
    botMessage("Congrats, your travel plan is complete!", 1);
  }, 2000);

  Meteor.setTimeout(function() {
    botMessage("", 'itinerary', getFinalItinerary());
  }, 3000);

}


function executeSentence(sentence, msgId) {
  witLocation(sentence, commandParser, msgId)
}

Meteor.chatbot = {
  executeSentence: executeSentence,
  chooseHotelRoom: chooseHotelRoom
}

var hardcoded_flights = {
    "PricedItineraries": [{
        "AirItinerary": {
            "OriginDestinationOptions": {
                "OriginDestinationOption": [{
                    "FlightSegment": [{
                        "DepartureAirport": {
                            "LocationCode": "SIN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "CAN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 230,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "O",
                        "Equipment": {
                            "AirEquipType": 321
                        },
                        "DepartureDateTime": "2016-10-20T08:00:00",
                        "ArrivalDateTime": "2016-10-20T11:50:00",
                        "FlightNumber": 352,
                        "OperatingAirline": {
                            "FlightNumber": 352,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }, {
                        "DepartureAirport": {
                            "LocationCode": "CAN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "JFK"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": -4
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 925,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": "77W"
                        },
                        "DepartureDateTime": "2016-10-20T14:35:00",
                        "ArrivalDateTime": "2016-10-20T18:00:00",
                        "FlightNumber": 699,
                        "OperatingAirline": {
                            "FlightNumber": 699,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1320
                }, {
                    "FlightSegment": [{
                        "DepartureAirport": {
                            "LocationCode": "JFK"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "CAN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "DataElement": {
                                "SubjectToGovernmentApproval": true
                            },
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 960,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "O",
                        "Equipment": {
                            "AirEquipType": "77W"
                        },
                        "DepartureDateTime": "2016-10-27T01:45:00",
                        "ArrivalDateTime": "2016-10-28T05:45:00",
                        "FlightNumber": 600,
                        "OperatingAirline": {
                            "FlightNumber": 600,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": -4
                        }
                    }, {
                        "DepartureAirport": {
                            "LocationCode": "CAN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "SIN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 245,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": 321
                        },
                        "DepartureDateTime": "2016-10-28T18:25:00",
                        "ArrivalDateTime": "2016-10-28T22:30:00",
                        "FlightNumber": 351,
                        "OperatingAirline": {
                            "FlightNumber": 351,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1965
                }]
            },
            "DirectionInd": "Return"
        },
        "TPA_Extensions": {
            "ValidatingCarrier": {
                "Code": "CZ"
            }
        },
        "SequenceNumber": 3,
        "AirItineraryPricingInfo": {
            "PTC_FareBreakdowns": {
                "PTC_FareBreakdown": {
                    "FareBasisCodes": {
                        "FareBasisCode": [{
                            "BookingCode": "Z",
                            "DepartureAirportCode": "SIN",
                            "ArrivalAirportCode": "CAN",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "CAN",
                            "AvailabilityBreak": true,
                            "ArrivalAirportCode": "JFK",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "JFK",
                            "ArrivalAirportCode": "CAN",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "CAN",
                            "AvailabilityBreak": true,
                            "ArrivalAirportCode": "SIN",
                            "content": "ZPRS2"
                        }]
                    },
                    "PassengerTypeQuantity": {
                        "Quantity": 1,
                        "Code": "ADT"
                    },
                    "PassengerFare": {
                        "FareConstruction": {
                            "CurrencyCode": "NUC",
                            "DecimalPlaces": 2,
                            "Amount": 517.68
                        },
                        "TotalFare": {
                            "CurrencyCode": "SGD",
                            "Amount": "1085.10"
                        },
                        "Taxes": {
                            "TotalTax": {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "Amount": "385.10"
                            },
                            "Tax": [{
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "SG1",
                                "Amount": "19.90"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "OO",
                                "Amount": "8.00"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "OP",
                                "Amount": "6.10"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "CN1",
                                "Amount": "37.20"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "US2",
                                "Amount": "49.00"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "YC",
                                "Amount": "7.60"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XY",
                                "Amount": "9.70"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XA",
                                "Amount": "5.50"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "AY",
                                "Amount": "7.70"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XF",
                                "Amount": "6.20"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YRF",
                                "Amount": 103.1
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YRF",
                                "Amount": 103.1
                            }]
                        },
                        "BaseFare": {
                            "CurrencyCode": "SGD",
                            "Amount": "700.00"
                        },
                        "EquivFare": {
                            "CurrencyCode": "SGD",
                            "DecimalPlaces": 2,
                            "Amount": "700.00"
                        }
                    }
                }
            },
            "FareInfos": {
                "FareInfo": [{
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }]
            },
            "TPA_Extensions": {
                "DivideInParty": {
                    "Indicator": false
                }
            },
            "ItinTotalFare": {
                "FareConstruction": {
                    "CurrencyCode": "NUC",
                    "DecimalPlaces": 2,
                    "Amount": 517.68
                },
                "TotalFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "1085.10"
                },
                "Taxes": {
                    "Tax": [{
                        "CurrencyCode": "SGD",
                        "DecimalPlaces": 2,
                        "TaxCode": "TOTALTAX",
                        "Amount": "385.10"
                    }]
                },
                "BaseFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "700.00"
                },
                "EquivFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "700.00"
                }
            }
        },
        "TicketingInfo": {
            "TicketType": "eTicket"
        }
    }, {
        "AirItinerary": {
            "OriginDestinationOptions": {
                "OriginDestinationOption": [{
                    "FlightSegment": [{
                        "DepartureAirport": {
                            "LocationCode": "SIN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "CAN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 230,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "O",
                        "Equipment": {
                            "AirEquipType": 321
                        },
                        "DepartureDateTime": "2016-10-20T08:00:00",
                        "ArrivalDateTime": "2016-10-20T11:50:00",
                        "FlightNumber": 352,
                        "OperatingAirline": {
                            "FlightNumber": 352,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }, {
                        "DepartureAirport": {
                            "LocationCode": "CAN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "JFK"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": -4
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 925,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": "77W"
                        },
                        "DepartureDateTime": "2016-10-20T14:35:00",
                        "ArrivalDateTime": "2016-10-20T18:00:00",
                        "FlightNumber": 699,
                        "OperatingAirline": {
                            "FlightNumber": 699,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1320
                }, {
                    "FlightSegment": [{
                        "DepartureAirport": {
                            "LocationCode": "JFK"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "CAN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "DataElement": {
                                "SubjectToGovernmentApproval": true
                            },
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 960,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "O",
                        "Equipment": {
                            "AirEquipType": "77W"
                        },
                        "DepartureDateTime": "2016-10-27T01:45:00",
                        "ArrivalDateTime": "2016-10-28T05:45:00",
                        "FlightNumber": 600,
                        "OperatingAirline": {
                            "FlightNumber": 600,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": -4
                        }
                    }, {
                        "DepartureAirport": {
                            "LocationCode": "CAN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "SIN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 245,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": "73G"
                        },
                        "DepartureDateTime": "2016-10-28T12:45:00",
                        "ArrivalDateTime": "2016-10-28T16:50:00",
                        "FlightNumber": 3039,
                        "OperatingAirline": {
                            "FlightNumber": 3039,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1625
                }]
            },
            "DirectionInd": "Return"
        },
        "TPA_Extensions": {
            "ValidatingCarrier": {
                "Code": "CZ"
            }
        },
        "SequenceNumber": 2,
        "AirItineraryPricingInfo": {
            "PTC_FareBreakdowns": {
                "PTC_FareBreakdown": {
                    "FareBasisCodes": {
                        "FareBasisCode": [{
                            "BookingCode": "Z",
                            "DepartureAirportCode": "SIN",
                            "ArrivalAirportCode": "CAN",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "CAN",
                            "AvailabilityBreak": true,
                            "ArrivalAirportCode": "JFK",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "JFK",
                            "ArrivalAirportCode": "CAN",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "CAN",
                            "AvailabilityBreak": true,
                            "ArrivalAirportCode": "SIN",
                            "content": "ZPRS2"
                        }]
                    },
                    "PassengerTypeQuantity": {
                        "Quantity": 1,
                        "Code": "ADT"
                    },
                    "PassengerFare": {
                        "FareConstruction": {
                            "CurrencyCode": "NUC",
                            "DecimalPlaces": 2,
                            "Amount": 517.68
                        },
                        "TotalFare": {
                            "CurrencyCode": "SGD",
                            "Amount": "1085.10"
                        },
                        "Taxes": {
                            "TotalTax": {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "Amount": "385.10"
                            },
                            "Tax": [{
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "SG1",
                                "Amount": "19.90"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "OO",
                                "Amount": "8.00"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "OP",
                                "Amount": "6.10"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "CN1",
                                "Amount": "37.20"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "US2",
                                "Amount": "49.00"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "YC",
                                "Amount": "7.60"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XY",
                                "Amount": "9.70"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XA",
                                "Amount": "5.50"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "AY",
                                "Amount": "7.70"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XF",
                                "Amount": "6.20"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YRF",
                                "Amount": 103.1
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YRF",
                                "Amount": 103.1
                            }]
                        },
                        "BaseFare": {
                            "CurrencyCode": "SGD",
                            "Amount": "700.00"
                        },
                        "EquivFare": {
                            "CurrencyCode": "SGD",
                            "DecimalPlaces": 2,
                            "Amount": "700.00"
                        }
                    }
                }
            },
            "FareInfos": {
                "FareInfo": [{
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }]
            },
            "TPA_Extensions": {
                "DivideInParty": {
                    "Indicator": false
                }
            },
            "ItinTotalFare": {
                "FareConstruction": {
                    "CurrencyCode": "NUC",
                    "DecimalPlaces": 2,
                    "Amount": 517.68
                },
                "TotalFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "1085.10"
                },
                "Taxes": {
                    "Tax": [{
                        "CurrencyCode": "SGD",
                        "DecimalPlaces": 2,
                        "TaxCode": "TOTALTAX",
                        "Amount": "385.10"
                    }]
                },
                "BaseFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "700.00"
                },
                "EquivFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "700.00"
                }
            }
        },
        "TicketingInfo": {
            "TicketType": "eTicket"
        }
    }, {
        "AirItinerary": {
            "OriginDestinationOptions": {
                "OriginDestinationOption": [{
                    "FlightSegment": [{
                        "DepartureAirport": {
                            "LocationCode": "SIN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "CAN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 230,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "O",
                        "Equipment": {
                            "AirEquipType": 321
                        },
                        "DepartureDateTime": "2016-10-20T08:00:00",
                        "ArrivalDateTime": "2016-10-20T11:50:00",
                        "FlightNumber": 352,
                        "OperatingAirline": {
                            "FlightNumber": 352,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }, {
                        "DepartureAirport": {
                            "LocationCode": "CAN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "JFK"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": -4
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 925,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": "77W"
                        },
                        "DepartureDateTime": "2016-10-20T14:35:00",
                        "ArrivalDateTime": "2016-10-20T18:00:00",
                        "FlightNumber": 699,
                        "OperatingAirline": {
                            "FlightNumber": 699,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1320
                }, {
                    "FlightSegment": [{
                        "DepartureAirport": {
                            "LocationCode": "JFK"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "CAN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 965,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "O",
                        "Equipment": {
                            "AirEquipType": "77W"
                        },
                        "DepartureDateTime": "2016-10-27T11:15:00",
                        "ArrivalDateTime": "2016-10-28T15:20:00",
                        "FlightNumber": 300,
                        "OperatingAirline": {
                            "FlightNumber": 300,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": -4
                        }
                    }, {
                        "DepartureAirport": {
                            "LocationCode": "CAN"
                        },
                        "ArrivalAirport": {
                            "LocationCode": "SIN"
                        },
                        "MarketingAirline": {
                            "Code": "CZ"
                        },
                        "ArrivalTimeZone": {
                            "GMTOffset": 8
                        },
                        "TPA_Extensions": {
                            "eTicket": {
                                "Ind": true
                            }
                        },
                        "StopQuantity": 0,
                        "ElapsedTime": 245,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": 321
                        },
                        "DepartureDateTime": "2016-10-28T18:25:00",
                        "ArrivalDateTime": "2016-10-28T22:30:00",
                        "FlightNumber": 351,
                        "OperatingAirline": {
                            "FlightNumber": 351,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1395
                }]
            },
            "DirectionInd": "Return"
        },
        "TPA_Extensions": {
            "ValidatingCarrier": {
                "Code": "CZ"
            }
        },
        "SequenceNumber": 1,
        "AirItineraryPricingInfo": {
            "PTC_FareBreakdowns": {
                "PTC_FareBreakdown": {
                    "FareBasisCodes": {
                        "FareBasisCode": [{
                            "BookingCode": "Z",
                            "DepartureAirportCode": "SIN",
                            "ArrivalAirportCode": "CAN",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "CAN",
                            "AvailabilityBreak": true,
                            "ArrivalAirportCode": "JFK",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "JFK",
                            "ArrivalAirportCode": "CAN",
                            "content": "ZPRS2"
                        }, {
                            "BookingCode": "Z",
                            "DepartureAirportCode": "CAN",
                            "AvailabilityBreak": true,
                            "ArrivalAirportCode": "SIN",
                            "content": "ZPRS2"
                        }]
                    },
                    "PassengerTypeQuantity": {
                        "Quantity": 1,
                        "Code": "ADT"
                    },
                    "PassengerFare": {
                        "FareConstruction": {
                            "CurrencyCode": "NUC",
                            "DecimalPlaces": 2,
                            "Amount": 517.68
                        },
                        "TotalFare": {
                            "CurrencyCode": "SGD",
                            "Amount": "1085.10"
                        },
                        "Taxes": {
                            "TotalTax": {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "Amount": "385.10"
                            },
                            "Tax": [{
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "SG1",
                                "Amount": "19.90"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "OO",
                                "Amount": "8.00"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "OP",
                                "Amount": "6.10"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "CN1",
                                "Amount": "37.20"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "US2",
                                "Amount": "49.00"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "YC",
                                "Amount": "7.60"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XY",
                                "Amount": "9.70"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XA",
                                "Amount": "5.50"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "AY",
                                "Amount": "7.70"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 2,
                                "TaxCode": "XF",
                                "Amount": "6.20"
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YQI",
                                "Amount": 5.5
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YRF",
                                "Amount": 103.1
                            }, {
                                "CurrencyCode": "SGD",
                                "DecimalPlaces": 1,
                                "TaxCode": "YRF",
                                "Amount": 103.1
                            }]
                        },
                        "BaseFare": {
                            "CurrencyCode": "SGD",
                            "Amount": "700.00"
                        },
                        "EquivFare": {
                            "CurrencyCode": "SGD",
                            "DecimalPlaces": 2,
                            "Amount": "700.00"
                        }
                    }
                }
            },
            "FareInfos": {
                "FareInfo": [{
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }, {
                    "TPA_Extensions": {
                        "Cabin": {
                            "Cabin": "Y"
                        },
                        "SeatsRemaining": {
                            "BelowMin": false,
                            "Number": 4
                        }
                    },
                    "FareReference": "Z"
                }]
            },
            "TPA_Extensions": {
                "DivideInParty": {
                    "Indicator": false
                }
            },
            "ItinTotalFare": {
                "FareConstruction": {
                    "CurrencyCode": "NUC",
                    "DecimalPlaces": 2,
                    "Amount": 517.68
                },
                "TotalFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "1085.10"
                },
                "Taxes": {
                    "Tax": [{
                        "CurrencyCode": "SGD",
                        "DecimalPlaces": 2,
                        "TaxCode": "TOTALTAX",
                        "Amount": "385.10"
                    }]
                },
                "BaseFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "700.00"
                },
                "EquivFare": {
                    "CurrencyCode": "SGD",
                    "DecimalPlaces": 2,
                    "Amount": "700.00"
                }
            }
        },
        "TicketingInfo": {
            "TicketType": "eTicket"
        }
    }],
    "ReturnDateTime": "2016-10-27",
    "DepartureDateTime": "2016-10-20",
    "DestinationLocation": "JFK",
    "OriginLocation": "SIN",
    "Links": [{
        "rel": "self",
        "href": "https://api.test.sabre.com/v1/shop/flights?origin=SIN&destination=JFK&departuredate=2016-10-20&returndate=2016-10-27&onlineitinerariesonly=N&limit=3&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=SG"
    }, {
        "rel": "linkTemplate",
        "href": "https://api.test.sabre.com/v1/shop/flights?origin=<origin>&destination=<destination>&departuredate=<departuredate>&returndate=<returndate>&offset=<offset>&limit=<limit>&sortby=<sortby>&order=<order>&sortby2=<sortby2>&order2=<order2>&minfare=<minfare>&maxfare=<maxfare>&includedcarriers=<includedcarriers>&excludedcarriers=<excludedcarriers>&outboundflightstops=<outboundflightstops>&inboundflightstops=<inboundflightstops>&outboundstopduration=<outboundstopduration>&inboundstopduration=<inboundstopduration>&outbounddeparturewindow=<outbounddeparturewindow>&outboundarrivalwindow=<outboundarrivalwindow>&inbounddeparturewindow=<inbounddeparturewindow>&inboundarrivalwindow=<inboundarrivalwindow>&onlineitinerariesonly=<onlineitinerariesonly>&eticketsonly=<eticketsonly>&includedconnectpoints=<includedconnectpoints>&excludedconnectpoints=<excludedconnectpoints>&pointofsalecountry=<pointofsalecountry>&passengercount=<passengercount>&enabletagging=<enabletagging>"
    }]
}