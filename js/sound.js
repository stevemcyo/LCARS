var hover = new Audio('sound/hover.mp3');

var click = new Audio('sound/click.mp3');

$(".button").mouseenter(function() {
  hover.play();
});

$("#b1").click(function() {
  click.play();
  window.location.replace("planets.html")
});
$("#b2").click(function() {
  click.play();
  window.location.replace("species.html")
});
$("#b3").click(function() {
  click.play();
  window.location.replace("ships.html")
});
