var months = [ "January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December" ];

var weddingDate = new Date(2020, 10, 20, 13, 0, 0);
var weddingDateMs = weddingDate.getTime();

var countDown = setInterval (function timeUntil() {
  var todaysDate = new Date().getTime();

  var diff = weddingDateMs - todaysDate;

  var days = Math.floor(diff / (60 * 60 * 1000 * 24));
  var hours = Math.floor((diff % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000));
  var minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((diff % (60 * 1000)) / 1000);

  document.getElementById("countdown-text").innerHTML =
    "<div class = 'days'><div class = 'numbers'>" + days + "</div>days</div>" +
    "<div class = 'hours'><div class = 'numbers'>" + hours + "</div>hours</div>" +
    "<div class = 'minutes'><div class = 'numbers'>" + minutes + "</div>minutes</div>" +
    "<div class = 'seconds'><div class = 'numbers'>" + seconds + "</div>seconds</div>";

  if (diff <= 0){
    clearInterval(countDown);
    $('.invitation-text').remove();
    $('.time').remove();
    $('#countdown-text').css({'font-size': '2rem', 'margin': '1rem'});
    $('#countdown-text').html("Thank you so much for being part of our day! <br> It truly was amazing. <br> Please visit the photos section to upload any photos you took. <br><br> We can't wait to see them all.");
  }
}, 1000);
