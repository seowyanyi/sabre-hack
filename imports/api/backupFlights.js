export const backupFlights = {
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
                        "ElapsedTime": 230,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": 320
                        },
                        "DepartureDateTime": "2016-10-28T08:40:00",
                        "ArrivalDateTime": "2016-10-28T12:30:00",
                        "FlightNumber": 353,
                        "OperatingAirline": {
                            "FlightNumber": 353,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1365
                }]
            },
            "DirectionInd": "Return"
        },
        "TPA_Extensions": {
            "ValidatingCarrier": {
                "Code": "CZ"
            }
        },
        "SequenceNumber": 4,
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
                        "ElapsedTime": 250,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "O",
                        "Equipment": {
                            "AirEquipType": 320
                        },
                        "DepartureDateTime": "2016-10-20T13:30:00",
                        "ArrivalDateTime": "2016-10-20T17:40:00",
                        "FlightNumber": 354,
                        "OperatingAirline": {
                            "FlightNumber": 354,
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
                        "ElapsedTime": 935,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": "77W"
                        },
                        "DepartureDateTime": "2016-10-21T01:40:00",
                        "ArrivalDateTime": "2016-10-21T05:15:00",
                        "FlightNumber": 399,
                        "OperatingAirline": {
                            "FlightNumber": 399,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1665
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
        "SequenceNumber": 5,
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
                        "ElapsedTime": 250,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "O",
                        "Equipment": {
                            "AirEquipType": 320
                        },
                        "DepartureDateTime": "2016-10-20T13:30:00",
                        "ArrivalDateTime": "2016-10-20T17:40:00",
                        "FlightNumber": 354,
                        "OperatingAirline": {
                            "FlightNumber": 354,
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
                        "ElapsedTime": 935,
                        "ResBookDesigCode": "Z",
                        "MarriageGrp": "I",
                        "Equipment": {
                            "AirEquipType": "77W"
                        },
                        "DepartureDateTime": "2016-10-21T01:40:00",
                        "ArrivalDateTime": "2016-10-21T05:15:00",
                        "FlightNumber": 399,
                        "OperatingAirline": {
                            "FlightNumber": 399,
                            "Code": "CZ"
                        },
                        "DepartureTimeZone": {
                            "GMTOffset": 8
                        }
                    }],
                    "ElapsedTime": 1665
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
        "SequenceNumber": 6,
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
        "href": "https://api.test.sabre.com/v1/shop/flights?origin=SIN&destination=JFK&departuredate=2016-10-20&returndate=2016-10-27&onlineitinerariesonly=N&limit=6&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=SG"
    }, {
        "rel": "linkTemplate",
        "href": "https://api.test.sabre.com/v1/shop/flights?origin=<origin>&destination=<destination>&departuredate=<departuredate>&returndate=<returndate>&offset=<offset>&limit=<limit>&sortby=<sortby>&order=<order>&sortby2=<sortby2>&order2=<order2>&minfare=<minfare>&maxfare=<maxfare>&includedcarriers=<includedcarriers>&excludedcarriers=<excludedcarriers>&outboundflightstops=<outboundflightstops>&inboundflightstops=<inboundflightstops>&outboundstopduration=<outboundstopduration>&inboundstopduration=<inboundstopduration>&outbounddeparturewindow=<outbounddeparturewindow>&outboundarrivalwindow=<outboundarrivalwindow>&inbounddeparturewindow=<inbounddeparturewindow>&inboundarrivalwindow=<inboundarrivalwindow>&onlineitinerariesonly=<onlineitinerariesonly>&eticketsonly=<eticketsonly>&includedconnectpoints=<includedconnectpoints>&excludedconnectpoints=<excludedconnectpoints>&pointofsalecountry=<pointofsalecountry>&passengercount=<passengercount>&enabletagging=<enabletagging>"
    }]
}