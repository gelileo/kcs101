var canvas, canvasContext;
const framesPerSecond = 30;

// Fires after the page is finished loading
window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  setInterval(updateAll, 1000 / framesPerSecond);

  // canvas.addEventListener('mousedown', handleMouseClick);
  canvas.addEventListener('mousemove', updateMousePosition);

  paddleX = (canvas.width - PADDLE_WIDTH) / 2;
  drawAll();
}

const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;
const BRICK_COLS = 10;
const BRICK_GAP = 2;
const BRICK_ROWS = 10;
var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;

function rowColToArrayIndex(col, row) {
  return col + row * BRICK_COLS;
}


//paddle variables and constants
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 10;
const PADDLE_DIST_TO_BOTTOM = 60;
var paddleX = 0;

//mouse variables;
var mouseX;
var mouseY;

//ball variables
var ballX = 200;
var ballSpeedX = 5;
var ballY = 200;
var ballSpeedY = -5;
var ballRadius = 10;

function drawAll() {
  //background
  rect(0, 0, canvas.width, canvas.height, 'black');
  drawPaddle();
  drawMouse()
  ball();
}

function drawPaddle() {
  rect(paddleX, canvas.height - PADDLE_DIST_TO_BOTTOM, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

function drawMouse() {

  text(`(${mouseX}, ${mouseY})`, mouseX, mouseY, 'yellow', '12px Arial');
  
  var mouseBrickCol = Math.floor(mouseX / BRICK_WIDTH);
  var mouseBrickRow = Math.floor(mouseY / BRICK_HEIGHT);
  var brickIndexUnderMouse = rowColToArrayIndex(mouseBrickCol, mouseBrickRow);
  text(mouseBrickCol + "," + mouseBrickRow + ":" + brickIndexUnderMouse, 200, 100, 'yellow', '12px Arial');
}
function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  ballMovement();
}

function updateMousePosition(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;

  paddleX = mouseX - (PADDLE_WIDTH/2);
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

function ball() {
  circle(ballX, ballY, ballRadius, 'yellow');
}