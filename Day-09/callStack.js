function greet(who) {
  console.log("Entering greet()");
  console.log("Hello, " + who);
  innerGreet();
  console.log("Exiting greet()");
}

function innerGreet() {
  console.log("Entering innerGreet()");
  console.log("This is a nested call!");
  console.log("Exiting innerGreet()");
}

console.log("Starting program");
greet("John");
console.log("Program ended");