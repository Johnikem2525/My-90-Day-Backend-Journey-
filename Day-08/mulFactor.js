function multiplier(factor) {
  return function(num) {
  console.log(num * factor);
}
}
multiplier(2)(6);
multiplier(5)(8);