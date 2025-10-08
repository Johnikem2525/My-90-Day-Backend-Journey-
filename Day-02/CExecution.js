// This is a test on Conditional Execution
function checkPassMark(score) {
if (score >= 50) {
  return "PASSED";
} else { return "FAILED";
}
}
let studentScore = 90;
console.log("This student " + checkPassMark(studentScore));