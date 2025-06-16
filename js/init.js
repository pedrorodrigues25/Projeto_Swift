function initData() {
  // DESTINATIONS
  if (!localStorage.destinations) {
    const destinations = [
  {
    "idDestination": "d1",
    "destinationInfo": "Lisbon is a wonderful European city known for its rich culture and history.",
    "name": "Lisbon",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 386.62,
        "date": "2025-07-01",
        "remainingEconomySeats": 170,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Lisbon Airport",
        "flightTime": "0h 55m"
      },
      {
        "airCompany": "British Airways",
        "price": 368.82,
        "date": "2025-09-08",
        "remainingEconomySeats": 113,
        "remainingBusinessSeats": 28,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Lisbon Airport",
        "flightTime": "0h 55m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 433.25,
        "date": "2025-08-31",
        "remainingEconomySeats": 137,
        "remainingBusinessSeats": 25,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Lisbon Airport",
        "flightTime": "0h 55m"
      }
    ]
  },
  {
    "idDestination": "d2",
    "destinationInfo": "Paris is a wonderful European city known for its rich culture and history.",
    "name": "Paris",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 363.85,
        "date": "2025-07-05",
        "remainingEconomySeats": 106,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      },
      {
        "airCompany": "Ryanair",
        "price": 310.77,
        "date": "2025-07-08",
        "remainingEconomySeats": 175,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      },
      {
        "airCompany": "easyJet",
        "price": 258.89,
        "date": "2025-07-11",
        "remainingEconomySeats": 114,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 236.84,
        "date": "2025-08-22",
        "remainingEconomySeats": 130,
        "remainingBusinessSeats": 18,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Paris Airport",
        "flightTime": "2h 10m"
      }
    ]
  },
  {
    "idDestination": "d3",
    "destinationInfo": "Rome is a wonderful European city known for its rich culture and history.",
    "name": "Rome",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 40.17,
        "date": "2025-08-12",
        "remainingEconomySeats": 123,
        "remainingBusinessSeats": 30,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 307.72,
        "date": "2025-08-21",
        "remainingEconomySeats": 171,
        "remainingBusinessSeats": 11,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "Ryanair",
        "price": 163.11,
        "date": "2025-08-03",
        "remainingEconomySeats": 117,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 227.57,
        "date": "2025-08-04",
        "remainingEconomySeats": 107,
        "remainingBusinessSeats": 11,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Rome Airport",
        "flightTime": "3h 0m"
      }
    ]
  },
  {
    "idDestination": "d4",
    "destinationInfo": "Berlin is a wonderful European city known for its rich culture and history.",
    "name": "Berlin",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 237.63,
        "date": "2025-08-02",
        "remainingEconomySeats": 114,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Berlin Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 291.85,
        "date": "2025-07-29",
        "remainingEconomySeats": 137,
        "remainingBusinessSeats": 28,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Berlin Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 232.07,
        "date": "2025-06-25",
        "remainingEconomySeats": 169,
        "remainingBusinessSeats": 24,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Berlin Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 402.88,
        "date": "2025-09-03",
        "remainingEconomySeats": 109,
        "remainingBusinessSeats": 23,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Berlin Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "Ryanair",
        "price": 290.31,
        "date": "2025-08-21",
        "remainingEconomySeats": 123,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Berlin Airport",
        "flightTime": "3h 0m"
      }
    ]
  },
  {
    "idDestination": "d5",
    "destinationInfo": "Madrid is a wonderful European city known for its rich culture and history.",
    "name": "Madrid",
    "flights": [
      {
        "airCompany": "British Airways",
        "price": 374.42,
        "date": "2025-07-30",
        "remainingEconomySeats": 139,
        "remainingBusinessSeats": 20,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      },
      {
        "airCompany": "British Airways",
        "price": 214.78,
        "date": "2025-06-20",
        "remainingEconomySeats": 121,
        "remainingBusinessSeats": 21,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 294.44,
        "date": "2025-08-12",
        "remainingEconomySeats": 129,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 43.5,
        "date": "2025-08-01",
        "remainingEconomySeats": 113,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 212.05,
        "date": "2025-08-13",
        "remainingEconomySeats": 165,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Madrid Airport",
        "flightTime": "1h 20m"
      }
    ]
  },
  {
    "idDestination": "d6",
    "destinationInfo": "Vienna is a wonderful European city known for its rich culture and history.",
    "name": "Vienna",
    "flights": [
      {
        "airCompany": "British Airways",
        "price": 397.61,
        "date": "2025-07-30",
        "remainingEconomySeats": 150,
        "remainingBusinessSeats": 10,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Vienna Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 401.49,
        "date": "2025-09-03",
        "remainingEconomySeats": 131,
        "remainingBusinessSeats": 20,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Vienna Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "easyJet",
        "price": 411.63,
        "date": "2025-09-02",
        "remainingEconomySeats": 174,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Vienna Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 199.85,
        "date": "2025-07-25",
        "remainingEconomySeats": 156,
        "remainingBusinessSeats": 20,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Vienna Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 287.31,
        "date": "2025-07-25",
        "remainingEconomySeats": 150,
        "remainingBusinessSeats": 27,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Vienna Airport",
        "flightTime": "3h 0m"
      }
    ]
  },
  {
    "idDestination": "d7",
    "destinationInfo": "Amsterdam is a wonderful European city known for its rich culture and history.",
    "name": "Amsterdam",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 415.34,
        "date": "2025-07-21",
        "remainingEconomySeats": 111,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "easyJet",
        "price": 325.82,
        "date": "2025-08-31",
        "remainingEconomySeats": 148,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 71.94,
        "date": "2025-06-28",
        "remainingEconomySeats": 104,
        "remainingBusinessSeats": 25,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 405.65,
        "date": "2025-06-28",
        "remainingEconomySeats": 164,
        "remainingBusinessSeats": 10,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "easyJet",
        "price": 387.25,
        "date": "2025-07-22",
        "remainingEconomySeats": 164,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Amsterdam Airport",
        "flightTime": "2h 30m"
      }
    ]
  },
  {
    "idDestination": "d8",
    "destinationInfo": "Prague is a wonderful European city known for its rich culture and history.",
    "name": "Prague",
    "flights": [
      {
        "airCompany": "British Airways",
        "price": 103.72,
        "date": "2025-06-23",
        "remainingEconomySeats": 177,
        "remainingBusinessSeats": 29,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Prague Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "Ryanair",
        "price": 168.58,
        "date": "2025-08-14",
        "remainingEconomySeats": 114,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Prague Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "Ryanair",
        "price": 163.91,
        "date": "2025-08-20",
        "remainingEconomySeats": 126,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Prague Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 65.01,
        "date": "2025-08-02",
        "remainingEconomySeats": 131,
        "remainingBusinessSeats": 12,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Prague Airport",
        "flightTime": "3h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 310.5,
        "date": "2025-06-14",
        "remainingEconomySeats": 133,
        "remainingBusinessSeats": 29,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Prague Airport",
        "flightTime": "3h 0m"
      }
    ]
  },
  {
    "idDestination": "d9",
    "destinationInfo": "Budapest is a wonderful European city known for its rich culture and history.",
    "name": "Budapest",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 303.56,
        "date": "2025-09-03",
        "remainingEconomySeats": 297,
        "remainingBusinessSeats": 31,
        "remainingFirstSeats": 11,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 70.39,
        "date": "2025-08-07",
        "remainingEconomySeats": 201,
        "remainingBusinessSeats": 49,
        "remainingFirstSeats": 10,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 188.19,
        "date": "2025-07-29",
        "remainingEconomySeats": 230,
        "remainingBusinessSeats": 41,
        "remainingFirstSeats": 13,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 49.64,
        "date": "2025-07-23",
        "remainingEconomySeats": 244,
        "remainingBusinessSeats": 36,
        "remainingFirstSeats": 10,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 161.21,
        "date": "2025-07-12",
        "remainingEconomySeats": 296,
        "remainingBusinessSeats": 24,
        "remainingFirstSeats": 20,
        "departureAirport": "Porto",
        "arrivalAirport": "Budapest Airport",
        "flightTime": "3h 10m"
      }
    ]
  },
  {
    "idDestination": "d10",
    "destinationInfo": "Barcelona is a wonderful European city known for its rich culture and history.",
    "name": "Barcelona",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 353.01,
        "date": "2025-07-08",
        "remainingEconomySeats": 176,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Barcelona Airport",
        "flightTime": "1h 30m"
      },
      {
        "airCompany": "Ryanair",
        "price": 266.89,
        "date": "2025-07-08",
        "remainingEconomySeats": 146,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Barcelona Airport",
        "flightTime": "1h 30m"
      },
      {
        "airCompany": "Ryanair",
        "price": 66.8,
        "date": "2025-06-25",
        "remainingEconomySeats": 179,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Barcelona Airport",
        "flightTime": "1h 30m"
      },
      {
        "airCompany": "easyJet",
        "price": 208.52,
        "date": "2025-06-15",
        "remainingEconomySeats": 171,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Barcelona Airport",
        "flightTime": "1h 30m"
      }
    ]
  },
  {
    "idDestination": "d11",
    "destinationInfo": "Copenhagen is a wonderful European city known for its rich culture and history.",
    "name": "Copenhagen",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 336.16,
        "date": "2025-09-04",
        "remainingEconomySeats": 102,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 76.46,
        "date": "2025-09-08",
        "remainingEconomySeats": 207,
        "remainingBusinessSeats": 30,
        "remainingFirstSeats": 12,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "Ryanair",
        "price": 117.87,
        "date": "2025-06-18",
        "remainingEconomySeats": 116,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 427.62,
        "date": "2025-08-09",
        "remainingEconomySeats": 208,
        "remainingBusinessSeats": 35,
        "remainingFirstSeats": 13,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      },
      {
        "airCompany": "British Airways",
        "price": 373.36,
        "date": "2025-06-19",
        "remainingEconomySeats": 273,
        "remainingBusinessSeats": 35,
        "remainingFirstSeats": 19,
        "departureAirport": "Porto",
        "arrivalAirport": "Copenhagen Airport",
        "flightTime": "3h 10m"
      }
    ]
  },
  {
    "idDestination": "d12",
    "destinationInfo": "Stockholm is a wonderful European city known for its rich culture and history.",
    "name": "Stockholm",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 252.3,
        "date": "2025-07-14",
        "remainingEconomySeats": 205,
        "remainingBusinessSeats": 32,
        "remainingFirstSeats": 12,
        "departureAirport": "Porto",
        "arrivalAirport": "Stockholm Airport",
        "flightTime": "3h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 177.79,
        "date": "2025-07-08",
        "remainingEconomySeats": 243,
        "remainingBusinessSeats": 27,
        "remainingFirstSeats": 17,
        "departureAirport": "Porto",
        "arrivalAirport": "Stockholm Airport",
        "flightTime": "3h 30m"
      },
      {
        "airCompany": "British Airways",
        "price": 429.29,
        "date": "2025-09-02",
        "remainingEconomySeats": 252,
        "remainingBusinessSeats": 42,
        "remainingFirstSeats": 18,
        "departureAirport": "Porto",
        "arrivalAirport": "Stockholm Airport",
        "flightTime": "3h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 400.18,
        "date": "2025-09-07",
        "remainingEconomySeats": 267,
        "remainingBusinessSeats": 50,
        "remainingFirstSeats": 18,
        "departureAirport": "Porto",
        "arrivalAirport": "Stockholm Airport",
        "flightTime": "3h 30m"
      }
    ]
  },
  {
    "idDestination": "d13",
    "destinationInfo": "Dublin is a wonderful European city known for its rich culture and history.",
    "name": "Dublin",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 110.3,
        "date": "2025-06-19",
        "remainingEconomySeats": 116,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "easyJet",
        "price": 123.53,
        "date": "2025-06-21",
        "remainingEconomySeats": 104,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 286.31,
        "date": "2025-07-13",
        "remainingEconomySeats": 105,
        "remainingBusinessSeats": 25,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "Ryanair",
        "price": 124.38,
        "date": "2025-09-08",
        "remainingEconomySeats": 157,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 292.0,
        "date": "2025-08-06",
        "remainingEconomySeats": 149,
        "remainingBusinessSeats": 14,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Dublin Airport",
        "flightTime": "2h 30m"
      }
    ]
  },
  {
    "idDestination": "d14",
    "destinationInfo": "Brussels is a wonderful European city known for its rich culture and history.",
    "name": "Brussels",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 307.36,
        "date": "2025-07-15",
        "remainingEconomySeats": 166,
        "remainingBusinessSeats": 20,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Brussels Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "Ryanair",
        "price": 165.21,
        "date": "2025-08-16",
        "remainingEconomySeats": 115,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Brussels Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 288.9,
        "date": "2025-08-17",
        "remainingEconomySeats": 178,
        "remainingBusinessSeats": 26,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Brussels Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "British Airways",
        "price": 162.47,
        "date": "2025-08-05",
        "remainingEconomySeats": 121,
        "remainingBusinessSeats": 19,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Brussels Airport",
        "flightTime": "2h 20m"
      }
    ]
  },
  {
    "idDestination": "d15",
    "destinationInfo": "Athens is a wonderful European city known for its rich culture and history.",
    "name": "Athens",
    "flights": [
      {
        "airCompany": "British Airways",
        "price": 321.84,
        "date": "2025-07-31",
        "remainingEconomySeats": 268,
        "remainingBusinessSeats": 24,
        "remainingFirstSeats": 17,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "British Airways",
        "price": 133.65,
        "date": "2025-08-19",
        "remainingEconomySeats": 268,
        "remainingBusinessSeats": 48,
        "remainingFirstSeats": 18,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "easyJet",
        "price": 227.07,
        "date": "2025-06-29",
        "remainingEconomySeats": 173,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 421.62,
        "date": "2025-08-01",
        "remainingEconomySeats": 285,
        "remainingBusinessSeats": 50,
        "remainingFirstSeats": 12,
        "departureAirport": "Porto",
        "arrivalAirport": "Athens Airport",
        "flightTime": "4h 0m"
      }
    ]
  },
  {
    "idDestination": "d16",
    "destinationInfo": "Oslo is a wonderful European city known for its rich culture and history.",
    "name": "Oslo",
    "flights": [
      {
        "airCompany": "TAP Air Portugal",
        "price": 94.69,
        "date": "2025-08-06",
        "remainingEconomySeats": 228,
        "remainingBusinessSeats": 46,
        "remainingFirstSeats": 10,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      },
      {
        "airCompany": "easyJet",
        "price": 327.17,
        "date": "2025-06-13",
        "remainingEconomySeats": 172,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      },
      {
        "airCompany": "British Airways",
        "price": 284.91,
        "date": "2025-07-06",
        "remainingEconomySeats": 264,
        "remainingBusinessSeats": 26,
        "remainingFirstSeats": 20,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      },
      {
        "airCompany": "easyJet",
        "price": 288.0,
        "date": "2025-07-14",
        "remainingEconomySeats": 151,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Oslo Airport",
        "flightTime": "3h 50m"
      }
    ]
  },
  {
    "idDestination": "d17",
    "destinationInfo": "Helsinki is a wonderful European city known for its rich culture and history.",
    "name": "Helsinki",
    "flights": [
      {
        "airCompany": "easyJet",
        "price": 242.52,
        "date": "2025-07-13",
        "remainingEconomySeats": 148,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Helsinki Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 87.76,
        "date": "2025-08-31",
        "remainingEconomySeats": 236,
        "remainingBusinessSeats": 30,
        "remainingFirstSeats": 10,
        "departureAirport": "Porto",
        "arrivalAirport": "Helsinki Airport",
        "flightTime": "4h 0m"
      },
      {
        "airCompany": "easyJet",
        "price": 290.84,
        "date": "2025-08-12",
        "remainingEconomySeats": 115,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Helsinki Airport",
        "flightTime": "4h 0m"
      }
    ]
  },
  {
    "idDestination": "d18",
    "destinationInfo": "Warsaw is a wonderful European city known for its rich culture and history.",
    "name": "Warsaw",
    "flights": [
      {
        "airCompany": "British Airways",
        "price": 308.66,
        "date": "2025-07-15",
        "remainingEconomySeats": 232,
        "remainingBusinessSeats": 30,
        "remainingFirstSeats": 12,
        "departureAirport": "Porto",
        "arrivalAirport": "Warsaw Airport",
        "flightTime": "3h 20m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 34.67,
        "date": "2025-07-03",
        "remainingEconomySeats": 233,
        "remainingBusinessSeats": 29,
        "remainingFirstSeats": 11,
        "departureAirport": "Porto",
        "arrivalAirport": "Warsaw Airport",
        "flightTime": "3h 20m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 307.16,
        "date": "2025-07-19",
        "remainingEconomySeats": 225,
        "remainingBusinessSeats": 35,
        "remainingFirstSeats": 19,
        "departureAirport": "Porto",
        "arrivalAirport": "Warsaw Airport",
        "flightTime": "3h 20m"
      },
      {
        "airCompany": "Ryanair",
        "price": 31.71,
        "date": "2025-06-26",
        "remainingEconomySeats": 143,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Warsaw Airport",
        "flightTime": "3h 20m"
      }
    ]
  },
  {
    "idDestination": "d19",
    "destinationInfo": "Zurich is a wonderful European city known for its rich culture and history.",
    "name": "Zurich",
    "flights": [
      {
        "airCompany": "Ryanair",
        "price": 434.87,
        "date": "2025-09-01",
        "remainingEconomySeats": 100,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Zurich Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 395.47,
        "date": "2025-06-13",
        "remainingEconomySeats": 113,
        "remainingBusinessSeats": 11,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Zurich Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "easyJet",
        "price": 341.53,
        "date": "2025-06-26",
        "remainingEconomySeats": 106,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Zurich Airport",
        "flightTime": "2h 20m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 404.77,
        "date": "2025-08-22",
        "remainingEconomySeats": 130,
        "remainingBusinessSeats": 19,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Zurich Airport",
        "flightTime": "2h 20m"
      }
    ]
  },
  {
    "idDestination": "d20",
    "destinationInfo": "Munich is a wonderful European city known for its rich culture and history.",
    "name": "Munich",
    "flights": [
      {
        "airCompany": "British Airways",
        "price": 156.46,
        "date": "2025-09-04",
        "remainingEconomySeats": 128,
        "remainingBusinessSeats": 23,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Munich Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "easyJet",
        "price": 265.66,
        "date": "2025-08-30",
        "remainingEconomySeats": 111,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Munich Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "easyJet",
        "price": 244.88,
        "date": "2025-07-07",
        "remainingEconomySeats": 111,
        "remainingBusinessSeats": 0,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Munich Airport",
        "flightTime": "2h 30m"
      },
      {
        "airCompany": "TAP Air Portugal",
        "price": 212.54,
        "date": "2025-06-25",
        "remainingEconomySeats": 136,
        "remainingBusinessSeats": 25,
        "remainingFirstSeats": 0,
        "departureAirport": "Porto",
        "arrivalAirport": "Munich Airport",
        "flightTime": "2h 30m"
      }
    ]
  }
];
    localStorage.setItem("destinations", JSON.stringify(destinations));
  }
}
initData();
