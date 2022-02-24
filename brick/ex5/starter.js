var canvas, canvasContext;


//bricks variables and constants
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;
const BRICK_COLS = 5;
const BRICK_GAP = 2;
const BRICK_ROWS = 4;
const BRICK_COLOR = '#B4693B'
var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;


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
  drawBricks();
  ball();
}

function ball() {
  circle(ballX, ballY, ballRadius, 'yellow');
}


function drawText() {
  text("BOUNCING BALL", canvas.width / 2, 150, 'white', 'bold 1em Arial', 'center');
}


function rowColToArrayIndex(col, row) {
  return col + row * BRICK_COLS;
}


function drawBricks() {
  for (var eachRow = 0; eachRow < BRICK_ROWS; eachRow++) {
    for (var eachCol = 0; eachCol < BRICK_COLS; eachCol++) {
      brick((BRICK_WIDTH * eachCol), BRICK_HEIGHT * eachRow,
        BRICK_WIDTH - BRICK_GAP,
        BRICK_HEIGHT - BRICK_GAP);
    }
  }//end of brick for
}//end of drawBricks