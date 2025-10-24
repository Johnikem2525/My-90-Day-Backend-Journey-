function zeroPad (number, width, padding = 0) {
  let string = String(number);
  while (string.length < width) {
    string = padding + string;
  }
  return string;
}
function farmInventory (cow, chicken, pig, goat, sheep) {
  console.log (`${zeroPad(cow, 3, )} Cows`);
  console.log (`${zeroPad(chicken, 3, "#")} Chickens`);
  console.log (`${zeroPad(pig, 3, "@")} Pigs`);
  console.log (`${zeroPad(goat, 3)} Goats`);
  console.log (`${zeroPad(sheep, 3, "**")} Sheep`);
}
farmInventory (6,7,4,9,3);
