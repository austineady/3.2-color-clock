

var $display = document.querySelector('.time');
var $color = document.querySelector('.colorclock');
var date = new Date();
var hours = checkTime(date.getHours());
var minutes = checkTime(date.getMinutes());
var seconds = checkTime(date.getSeconds());
var timeArray = [hours, minutes, seconds];
var timeDisplay = timeArray.join(':');

function checkTime(i) {
  return(i < 10) ? "0" + i : i;
}

function determineCurrentTime() {
  var date = new Date();
  var hours = checkTime(date.getHours());
  var minutes = checkTime(date.getMinutes());
  var seconds = checkTime(date.getSeconds());
  var timeArray = [hours, minutes, seconds];
  var timeDisplay = timeArray.join(':');
  var hexDisplay = Number(timeArray.join(''));
  var barLength = (seconds/60)*100;
  var percentChange = String(barLength) + "%";
  var hexString = hexDisplay.toString(16);
  var hexFormat = ("0" + hexString).slice(-6);
  var colorOne = hexFormat;
  document.getElementById('line').style.width = percentChange;
  var dom = document.body;
  dom.style.backgroundImage = '-webkit-gradient(radial, 50% 50%, 0, 50% 50%,1200, from(#' + colorOne + '), to(#353F3E))';
  $display.textContent = timeDisplay;
}

function displayCurrentTime() {
  $display.textContent = timeDisplay;
}

function displayHexValue() {
  var hexDisplay = Number(timeArray.join(''));
  var hexString = hexDisplay.toString(16);
  var hexFormat = ("0" + hexString).slice(-6);
  var colorOne = hexFormat;
  $display.textContent = colorOne;
}

$display.addEventListener('mouseenter', displayHexValue);
$display.addEventListener('mouseout', displayCurrentTime);

window.setInterval(determineCurrentTime, 1000);
