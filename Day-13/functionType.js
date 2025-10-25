// Function that returns a value
function add(a, b) {
  return a + b; // Returns a value (pure computation)
}

console.log(add(3, 4));

// Function that causes a side effect
function showMessage(message) {
  console.log("Message:", message); // Side effect: prints to console
}

showMessage("Hello there!");

// Function that does both (side effect + return)
function doubleAndLog(number) {
  console.log("Doubling:", number); // Side effect
  return number * 2; // Returns a value
}

console.log(doubleAndLog(5));