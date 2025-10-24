function zeroPad (number, width, padding = 0) {
  let string = String(number);
  while (string.length < width) {
    string = padding + string;
  }
  return string;
}

function printAligned(numbers, width) {
  for (let n of numbers) {
    console.log(zeroPad(n, width, "&"));
  }
}

printAligned([4, 23, 678, 9], 4);