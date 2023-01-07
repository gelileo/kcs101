
var canvas, canvasContext;
const BRICK_GAP = 4;
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;

const column_count = 5;
const row_count = 2;

//ball variables
var ballX = 200;
var ballSpeedX = 5;
var ballY = 200;
var ballSpeedY = -5;
var ballRadius = 10;

//paddle variables and constants
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 10;
const PADDLE_DIST_TO_BOTTOM = 60;

var paddleX = 0;

const framesPerSecond = 30;

//mouse variables;
var mouseX;
var mouseY;

// Fires after the page is finished loading
window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  // add a listener so that updateMousePosition() 
  // is called when mouse moves
  // canvas.addEventListener('mousemove', updateMousePosition);
  
  setInterval(updateAll, 1000 / framesPerSecond);
  
  clearCanvas();

}



function ballMovement() {
  ballX += ballSpeedX;

  //right
  if (ballX + ballRadius > canvas.width && ballSpeedX > 0.0) {
    ballSpeedX *= -1;
  }

  //left
  if (ballX - ballRadius < 0 && ballSpeedX < 0.0) {
    ballSpeedX *= -1;
  }

  ballY += ballSpeedY;

  // bottom
  if (ballY + ballRadius > canvas.height) {
    ballSpeedY *= -1;
  }

  // top
  if (ballY - ballRadius < 0 && ballSpeedY < 0.0) {
    ballSpeedY *= -1;
  }
}

function clearCanvas() {
  rect(0, 0, canvas.width, canvas.height, 'black');
}

function updateAll() {
  ballMovement();
  
  clearCanvas();
  
  drawBricks();  

 
  drawPaddle();
  
  drawBall();  
}

function drawBall() {
  circle(ballX, ballY, ballRadius, 'yellow');
}

function drawPaddle() {
  // paddleX = mouseX - (PADDLE_WIDTH / 2.0);
  rect(paddleX, canvas.height - PADDLE_DIST_TO_BOTTOM, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');  
}

function ball() {
  circle(ballX, ballY, ballRadius, 'yellow');
}

function drawBricks() {
  let x = 0;
  let y = 0;
  for (let row = 0; row < row_count; row ++) {
    for (let col = 0; col < 5; col++) {

      brick(x, y, BRICK_WIDTH - BRICK_GAP, BRICK_HEIGHT - BRICK_GAP);

      x += BRICK_WIDTH;
    }
    x = 0
    y += BRICK_HEIGHT;
  }
}

function drawText() {
  text("BOUNCING BALL", canvas.width / 2, 150, 'white', 'bold 1em Arial', 'center');
}

function updateMousePosition(evt) {
  var rect = canvas.getBoundingClientRect();

  mouseX = evt.clientX - rect.left;
  mouseY = evt.clientY - rect.top; 
}

function drawMouse() {

  text(`(${mouseX}, ${mouseY}), ${paddleX}`, mouseX, mouseY, paddleX, 'yellow', '12px Arial');

  // var mouseBrickCol = Math.floor(mouseX / BRICK_WIDTH);
  // var mouseBrickRow = Math.floor(mouseY / BRICK_HEIGHT);
  // var brickIndexUnderMouse = rowColToArrayIndex(mouseBrickCol, mouseBrickRow);
  // text(mouseBrickCol + "," + mouseBrickRow + ":" + brickIndexUnderMouse, 200, 100, 'yellow', '12px Arial');
}

// function moveAll() {
//   ballHitsPaddle();
//   ballMovement();
// }


function ballHitsPaddle() {
  var paddleTop = canvas.height - PADDLE_DIST_TO_BOTTOM;
  var paddleBottom = paddleTop + PADDLE_HEIGHT;
  var paddleLeft = paddleX;
  var paddleRight = paddleLeft + PADDLE_WIDTH;

  if (ballY + ballRadius > paddleTop && //below the top of the paddle
    ballY < paddleBottom && //above the bottom of the paddle
    ballX + ballRadius > paddleLeft && //right of the left side of the paddle
    ballX - ballRadius < paddleRight) { //left of the right side of the paddle

    if (ballSpeedY != 0) {
      document.getElementById("audio").play();
    }
    
    ballSpeedY *= -1;

    var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2;
    var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
    ballSpeedX = ballDistFromPaddleCenterX * 0.35;

  }
}