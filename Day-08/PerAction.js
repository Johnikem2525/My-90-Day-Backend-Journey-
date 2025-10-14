function start() {
  console.log ("system started");
}
  function stop() {
  console.log ("system stopped");
  }
  function pause() {
  console.log ("system paused");
}
let performAction = function(mode) {
if (mode == "start"){
start();
} else if (mode == "stop") {
  stop();
} else if (mode == "pause") {
  pause();
} else {
  console.log ("invalid mode");
}
}
performAction("pause");
performAction("stop");
performAction("start");
performAction("run");