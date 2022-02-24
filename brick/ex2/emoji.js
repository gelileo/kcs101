var canvas, canvasContext;

//ball variables
var ballX = 200;
var ballSpeedX = 3;
var ballY = 200;
var ballSpeedY = -5;
var ballRadius = 10;
//refresh rate
var framesPerSecond = 15;

//emoji
const framesPerEmoji = 7;
const emojiSize = 30;
var frameCounter = 0;
const emojis = ["😀", "😃", "😂", "😍", "😜"];
// var emoji = emojis[0];
// Fires after the page is finished loading
window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  setInterval(updateAll, 1000 / framesPerSecond);
  drawAll();
}

function ballMovement() {
  ballX += ballSpeedX;

  //right
  if((ballX + emojiSize) > canvas.width && ballSpeedX > 0.0) {
    ballSpeedX *= -1;
  }

  //left
  if(ballX < 0 && ballSpeedX < 0.0) {
    ballSpeedX *= -1;
  }

  ballY += ballSpeedY;

  // bottom
  if(ballY > canvas.height) {
    ballSpeedY *= -1;
  }

  // top
  if(ballY - emojiSize < 0 && ballSpeedY < 0.0) {
    ballSpeedY *= -1;
  }
}

function updateAll() {
  frameCounter ++;
  moveAll();
  drawAll();
}

function moveAll() {
  ballMovement();
}

function drawAll() {
  //background
  rect(0, 0, canvas.width, canvas.height, 'black');

  drawText();
  ball();
}

function ball() {
  circle(ballX, ballY, 2, 'yellow');
  text(emojis[Math.floor(frameCounter / framesPerEmoji) % emojis.length], ballX, ballY, "yellow", `${emojiSize}px serif`, 'left');
}


function drawText() {
  text("BOUNCING SMILEY", canvas.width / 2, 150, 'white', 'bold 1em Arial', 'center');
}
