

var $display = document.querySelector('.time');
var $color = document.querySelector('.colorclock');

function checkTime(i) {
  return(i < 10) ? "0" + i : i;
}


function displayCurrentTime() {
  var date = new Date();
  var hours = checkTime(date.getHours());
  var minutes = checkTime(date.getMinutes());
  var seconds = checkTime(date.getSeconds());
  var timeArray = [hours, minutes, seconds];
  var timeDisplay = timeArray.join(':');
  var hexDisplay = Number(timeArray.join(''));
  $display.textContent = timeDisplay;
  var barLength = (seconds/60)*100;
  var percentChange = String(barLength) + "%";
  var hexString = hexDisplay.toString(16);
  var hexFormat = ("0" + hexString).slice(-6);
  var colorOne = hexFormat;
  document.getElementById('line').style.width = percentChange;
  var dom = document.body;
  dom.style.backgroundImage = '-webkit-gradient(radial, 50% 50%, 0, 50% 50%,1000, from(#' + colorOne + '), to(#353F3E))';
}



window.setInterval(displayCurrentTime, 1000);
