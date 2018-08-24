
var countDownDate = new Date("Aug 31, 2018 00:00:00").getTime();
var countDownFunction = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now ;
    var days = Math.floor(distance /(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000 ));
    document.getElementById('countdown').innerHTML = (days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    if(distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("countdown").innerHTML = "Comming Soon";
      }
    }, 1000);