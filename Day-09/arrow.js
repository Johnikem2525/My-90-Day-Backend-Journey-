
// Original function expressions
const doubleOld = function(x) {
  return x * 2;
};
const greetOld = function(name) {
  return "Hello, " + name + "!";
};

// Arrow function versions (shorter)
const double = x => x * 2;
const greet = name => "Hello, " + name + "!";

console.log(`Old double: ${doubleOld(5)}`);
console.log(`New double: ${double(5)}`);

console.log(`Old greet: ${greetOld("John")}`);
console.log("New greet: " + greet("John"));