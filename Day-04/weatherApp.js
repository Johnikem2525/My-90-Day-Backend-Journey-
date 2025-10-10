const prompt = require("prompt-sync")();
let weather = prompt("what is the weather like? ");

switch (weather) {
 case "rainy":
  console.log ("Please stay indoors");
  break;
 case "sunny":
  console.log ("You can go outside");
  break;
 case "cloudy":
  console.log ("remember to take an umbrella with you");
 break;
 default:
  console.log ("unknown weather type!");
 break;
}