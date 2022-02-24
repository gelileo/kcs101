var canvas, canvasContext;

//ball variables
var ballX = 200;
var ballSpeedX = 5;
var ballY = 200;
var ballSpeedY = -5;
var ballRadius = 10;
//refresh rate
var framesPerSecond = 30;

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
  if(ballX + ballRadius > canvas.width && ballSpeedX > 0.0) {
    ballSpeedX *= -1;
  }

  //left
  if(ballX - ballRadius < 0 && ballSpeedX < 0.0) {
    ballSpeedX *= -1;
  }

  ballY += ballSpeedY;

  // bottom
  if(ballY + ballRadius > canvas.height) {
    ballSpeedY *= -1;
  }

  // top
  if(ballY - ballRadius < 0 && ballSpeedY < 0.0) {
    ballSpeedY *= -1;
  }
}

function updateAll() {
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
  circle(ballX, ballY, ballRadius, 'yellow');
}


function drawText() {
  text("BOUNCING BALL", canvas.width / 2, 150, 'white', 'bold 1em Arial', 'center');
}
