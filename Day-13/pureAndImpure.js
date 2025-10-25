// Pure function
function pureAdd(a, b) {
  return a + b; // No side effects
}
console.log(pureAdd(2, 3));


// Global variable
let extra = 5;
// Impure function
function impureAdd(a, b) {
  return a + b + extra; // Depends on outside variable
}
console.log(impureAdd(2, 3)); // → 10 (because extra = 5)
// If extra changes, result changes — even with same inputs!
extra = 10;
console.log(impureAdd(2, 3)); // → 15