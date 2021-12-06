// Countdown
var interval = setInterval(updateAll, 1000);

function updateAll() {
  var countdowns = $(".countdown");

  for(let i=0; i<countdowns.length; i++){
      updateSingle(countdowns[i]);
  }
}

function updateSingle(object){
  var countDownDate = new Date(object.dataset.year,object.dataset.month-1,object.dataset.day).getTime();

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  object.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

// Loading animation
window.onload = function (){
    $("#loading").animate({opacity: 1},200);
    particlesJS.load('money_overlay', '/assets/particles.json', function() {});
    setTimeout(function(){
        $("#loading").animate({opacity: 0},500, function(){
            $("#money_overlay").animate({opacity : 0.5},200);
            $("#loading").css("display","none");
            $("#content").css("display","initial");
            $("#content").animate({opacity: 1},500);
        });
    },1000);
};

// Impressum
$("#impressum").click(function(){
    Swal.fire('Impressum', 'Jonathan Treffler', 'info');
});
