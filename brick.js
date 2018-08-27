
import * as math from 'mathjs'
window.onload=function() {
  canv=document.getElementById("bb");
  ctx=canv.getContext("2d");
  document.addEventListener("mousemove",PlatformControl, False);
  document.addEventListener("keydown",keyPush);
  document.addEventListener("click", launchBall);
  setInterval(game, 1000/60);
}
var blox = math.ones(3, 15);
// changes to 0 when destroyed
//This has indiv block size 25px * 50px
vbx=vby=0;
px=canv.width/2; //initial
py=49; //doesnt change
function game() {
  if(px<0) {
    px=canv.width;
  }
  if (px>canv.width) {
    px=0;
  }
  ctx.fillStyle="#ff0000";
  ctx.fillRect(0, 0, canv.width, canv.height);


  var x = canvas.width/2;
  var y = canvas.height-30;
  var dx = 1;
  var dy = 1;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD"
    ctx.fill()
    ctx.closePath();
    y += dy
    x += dx
    ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    var pbloxx = 0;
    var pbloxy = 0;
    for(var i=0; i<=14; i++){
      for(var j=0; j<=2; j++){
        ctx.fillRect(pbloxx, pbloxy, 50, 25);
        pbloxy += 30;
        }
      pbloxx += 50;
    }
  }
  setInterval(draw, 10);





}
