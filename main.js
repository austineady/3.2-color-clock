

var $display = document.querySelector('.time');
var $color = document.querySelector('.colorclock');
var hover = false;

function checkTime(i) {
  return(i < 10) ? "0" + i : i;
}

function displayCurrentTime(timeDisplay, colorOne) {
  barTick();
  $display.textContent = timeDisplay;
  var dom = document.body;
  dom.style.backgroundImage = '-webkit-gradient(radial, 50% 50%, 0, 50% 50%,1200, from(#' + colorOne + '), to(#353F3E))';
}

function displayHexValue(colorOne) {
  $display.textContent = colorOne;
}

function determineCurrentTime() {
  var date = new Date();
  var hours = checkTime(date.getHours());
  var minutes = checkTime(date.getMinutes());
  var seconds = checkTime(date.getSeconds());
  var timeArray = [hours, minutes, seconds];
  var timeDisplay = timeArray.join(':');
  displayCurrentTime(timeArray, timeDisplay);
  determineHexValue(timeArray);
  barTick(seconds);
}

function barTick(seconds) {
  var barLength = (seconds/60)*100;
  var percentChange = String(barLength) + "%";
  document.getElementById('line').style.width = percentChange;

}

function determineHexValue(timeArray) {
  var hexDisplay = Number(timeArray.join(''));
  var hexString = hexDisplay.toString(16);
  var hexFormat = ("0" + hexString).slice(-6);
  var colorOne = hexFormat;
  displayHexValue(colorOne);
  displayCurrentTime(colorOne);
}
  // if (hover = true) {
  //   displayHexValue();
  // } else {
  //   displayCurrentTime();
  // }


// $display.addEventListener('mouseenter', displayHexValue);
// $display.addEventListener('mouseout', displayCurrentTime);

window.setInterval(displayCurrentTime, 1000);
displayCurrentTime();
window.setInterval(determineHexValue, 1000);
determineHexValue();
