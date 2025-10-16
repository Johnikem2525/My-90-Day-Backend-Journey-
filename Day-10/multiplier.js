const multiplier = factor => (number, tie = 6) => number * factor + tie
let double = multiplier(2);
let triple = multiplier(3);
console.log(double(6, 5));
console.log(triple(4));