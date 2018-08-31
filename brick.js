import * as math from 'mathjs'
var canv=document.getElementById("bb");
var ctx=canv.getContext("2d");
document.addEventListener("click", launchBall);
document.addEventListener("mousemove", mouseMoveHandler, false);

// changes to 0 when destroyed
//This has indiv block size 25px * 50px
var ballradius = 5;
dx = 0; //ball differential y
dy = 0; //ball differential x
px=canv.width/2; //initial
py=canv.height-50; //doesnt change
pw = 50; //platform width
ph = 10; //'' height
bx = px+25;// ball x
by = py+1; // ball y
blox = math.ones(3, 15); //matrix of bricks


function launchBall(event){
  if (dx == 0 && dy == 0){

  }
}


function mouseMoveHandler(event) {
  var rect = canv.getBoundingClientRect();
  var x = event.clientX-rect.left;
  var y = event.clientY-rect.top;
  if (dx || dy){
    if(px-(pw/2)<=0) {
      px=canv.width-50;
    }
    if (px+(pw/2)>canv.width) {
      px=pw/2;
    }
    px = x;
  } else {
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.moveTo(px, py-1);
    ctx.lineTo()

    }

  }



  function drawBlox() {
    ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    blox.forEach(function (value, index, matrix){
      if (blox.get(index) == 1) {
        ctx.fillRect(index[1]*50, index[0]*25, 50, 25);
      }
    }
  }

  function drawPlatform(){
    ctx.beginPath();
    ctx.fillStyle = "#0000000"
    ctx.strokeStyle = "yellow";
    ctx.rect(px-(pw/2), py, pw, ph);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  function drawBall(){
    ctx.beginPath();
    ctx.arc(bx, by, ballradius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  function collision(){
    forEach
  }



  function  draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlox();
    drawBall();
    drawPlatform();






    requestAnimationFrame(draw);{

    }
  }
