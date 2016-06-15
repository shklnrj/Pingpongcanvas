var x ;
var y ;
var ballradius = 10;
var dx = 5;
var ctx;
var WIDTH;
var HEIGHT;
var is_ball_moving = false;
var interval;

function circle(x,y,r) {
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}
function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}
function drawPingpongNet(){
  ctx.beginPath();
  ctx.moveTo(WIDTH/2, 0);
  ctx.lineTo(WIDTH/2, HEIGHT);
  ctx.stroke();
}
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
function draw() {
  clear();
  circle(x, y, ballradius);
  drawPingpongNet();
  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
  x += dx;
}

function init(start_playing) {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width()
  HEIGHT = $("#canvas").height()
  x = ballradius;
  miny = ballradius
  maxy = HEIGHT-ballradius
  y = Math.floor(Math.random() * (maxy-miny +1))+miny;
  if (start_playing) {
    interval = setInterval(draw, 10);
  }else{
    draw();
  }
}
function pause(){
  clearInterval(interval);
}
function startOrPause(){
  if (!is_ball_moving) {
    init(true);
    is_ball_moving = true;
    $("#myButton").html("Pause");
  }else{
    is_ball_moving = false;
    pause();
    $("#myButton").html("Re start");
  }
}
