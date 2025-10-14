let startEngine = function() {
  console.log("engine started!");
}
let safeMode = true;
if (safeMode) {
startEngine = function() {
  console.log("Engine locked in safe mode");
}
}
startEngine();