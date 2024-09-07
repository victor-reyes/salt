const prompt = require("prompt-sync")();
const express = require("express");
const app = express();

app.get("/greet/:name/", (req, res) => {
  res.send("Welcome to SALT, " + req.params.name);
});

app.listen(3000);
console.log(`Open http://localhost:3000/greet/Victor`);

function getDaysLeftFromNowTo(date) {
  const millisLeft = date.getTime() - Date.now();
  const daysLeft = Math.floor(millisLeft / (1000 * 60 * 60 * 24));
  return daysLeft;
}

const name = prompt("What is your name? ");

const courseStartDate = new Date(prompt("When does that course start? "));

const daysLeft = getDaysLeftFromNowTo(courseStartDate)

console.log(`Welcome to SALT, ${name}`);
if (daysLeft === 0) {
  console.log("The course has started today");
} else if (daysLeft < 0) {
  console.log(`The course stated for ${Math.abs(daysLeft)} days ago`);
} else {
  console.log(`Today it is ${daysLeft} days left until the course starts`);
}
