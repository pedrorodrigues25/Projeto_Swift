// init.js

import { User } from './UserModel.js';
import { Destination } from './destinationModel.js';
import { Review, ReviewComment } from './reviewsModel.js';
import { Quiz } from './quizModel.js';

// Helper functions
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}

const users = Array.from({ length: 20 }, (_, i) => {
  const id = `u${i + 1}`;
  const username = `user${i + 1}`;
  const password = `pass${i + 1}`;
  const email = `user${i + 1}@mail.com`;
  const coverPhoto = `cover${i + 1}.jpg`;
  const birthDate = `199${i % 10}-0${(i % 12) + 1}-15`;
  const phoneNumber = `90000000${i}`;
  const defaultPaymentMethod = i % 2 === 0 ? "Visa" : "MasterCard";
  const gender = i % 2 === 0 ? "F" : "M";
  return new User(id, username, password, email, coverPhoto, birthDate, phoneNumber, defaultPaymentMethod, gender, []);
});

const destinations = [];
const destinationNames = [
  "Paris", "London", "Rome", "Barcelona", "Berlin", "Amsterdam", "Lisbon", "Vienna", "Prague", "Athens",
  "Nice", "Copenhagen", "Dublin", "Brussels", "Madrid", "Oslo", "Warsaw", "Zurich", "Budapest", "Edinburgh",
  "Stockholm", "Helsinki", "Reykjavik", "Tallinn", "Ljubljana"
];

for (let i = 0; i < 25; i++) {
  const id = `d${i+1}`;
  const name = destinationNames[i];
  const info = `Explore the wonders of ${name}!`;
  const flights = [
    {
      airCompany: "Air Travel Co.",
      price: randomInt(50, 500),
      date: randomDate(new Date(2025, 5, 1), new Date(2025, 6, 30)),
      remainingEconomySeats: randomInt(30, 100),
      remainingBusinessSeats: randomInt(5, 20),
      remainingFirstSeats: randomInt(2, 10),
      departureAirport: "JFK",
      arrivalAirport: `${name} International`,
      flightTime: `${randomInt(2, 10)}h`
    }
  ];
  destinations.push(new Destination(id, info, name, flights));
}

const reviews = [];
let reviewIdCounter = 1;

destinations.forEach(dest => {
  for (let j = 0; j < 10; j++) {
    const uid = users[j % users.length].userId;
    const uname = users[j % users.length].username;
    const uphoto = users[j % users.length].coverPhoto;
    reviews.push(new Review(`r${reviewIdCounter++}`, dest.idDestination, uid, uname, uphoto, `Had a great time in ${dest.name}!`));
  }
});

const quizzes = destinationNames.map((name, idx) =>
  new Quiz(`q${idx+1}`, `${name} Quiz`, 100, [
    {
      questionDescription: `What country is ${name} in?`,
      response1: "Option A",
      response2: "Option B",
      response3: "Option C",
      response4: "Option D",
      correctResponse: "Option A"
    }
  ])
);

// Save to localStorage
function saveToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("destinations", JSON.stringify(destinations));
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

// Init
function initMockServer() {
  if (!localStorage.getItem("users")) {
    saveToLocalStorage();
    console.log("Mock server initialized with sample data.");
  } else {
    console.log("Mock server already initialized.");
  }
}

initMockServer();
