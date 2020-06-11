var months = [ "January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December" ];

var weddingDate = new Date(2021, 9, 20, 13, 0, 0);
var weddingDateMs = weddingDate.getTime();

var countdown = setInterval(function timeUntil() {
  var today = new Date().getTime();

  var diff = weddingDateMs - today;

  var days = Math.floor(diff / (60 * 60 * 1000 * 24));
  var hours = Math.floor((diff % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000));
  var minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((diff % (60 * 1000)) / 1000);

  document.getElementById('countdown-text').innerHTML =
  "<div class = 'days'><div class = 'numbers'>" + days + "</div>days</div>" +
  "<div class = 'hours'><div class = 'numbers'>" + hours + "</div>hours</div>" +
  "<div class = 'minutes'><div class = 'numbers'>" + minutes + "</div>minutes</div>" +
  "<div class = 'seconds'><div class = 'numbers'>" + seconds + "</div>seconds</div>";
}, 1000);
