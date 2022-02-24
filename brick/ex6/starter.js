var canvas, canvasContext;

//bricks variables and constants
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;
const BRICK_COLS = 5;
const BRICK_GAP = 2;
const BRICK_ROWS = 4;
const BRICK_COLOR = '#B4693B';

var brickGrid = [];
for (var i = 0; i < BRICK_ROWS; i++) {
  brickGrid[i] = new Array(BRICK_COLS);
}
var bricksLeft = 0;


//ball variables
var ballX = 200;
var ballSpeedX = 5;
var ballY = 200;
var ballSpeedY = -5;
var ballRadius = 10;
//refresh rate
var framesPerSecond = 30;


//paddle variables and constants
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 10;
const PADDLE_TO_BOTTOM = 60;
var paddleX = 0;

//mouse variables;
var mouseX;
var mouseY;

// Fires after the page is finished loading
window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  canvas.addEventListener('mousemove', updateMousePosition);

  setInterval(updateAll, 1000 / framesPerSecond);
  brickReset();
  paddleX = (canvas.width - PADDLE_WIDTH) / 2;
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
  ballBrickCollision();
  ballPaddleCollision();
  ballMovement();
}

function drawAll() {
  //background
  rect(0, 0, canvas.width, canvas.height, 'black');

  drawText();
  drawBricks();
  drawPaddle();
  drawMouse()
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
      if (brickGrid[eachRow][eachCol]) {
        rect((BRICK_WIDTH * eachCol), BRICK_HEIGHT * eachRow, BRICK_WIDTH - BRICK_GAP, BRICK_HEIGHT - BRICK_GAP, '#B4693B');
      }//end of brick drawing if true
    }
  }//end of brick for
}


function brickReset() {
  bricksLeft = 0;
  var i;

  for (i = 0; i < BRICK_ROWS; i++) {
    for (var j = 0; j < BRICK_COLS; j++) {
      if (Math.random() < 0.5) {
        brickGrid[i][j] = true;
      } else {
        brickGrid[i][j] = false;
      }
    }
  }
}//end of brickReset

function isBrickAtColRow(col, row) {
  if (col >= 0 && col < BRICK_COLS && row >= 0 && row < BRICK_ROWS) {
 
    return brickGrid[row][col];
  } else {
    return false;
  }
}

function ballBrickCollision() {
  var ballBrickCol = Math.floor(ballX / BRICK_WIDTH);
  var ballBrickRow = Math.floor(ballY / BRICK_HEIGHT);
  
  if (ballBrickCol >= 0 && ballBrickCol < BRICK_COLS && ballBrickRow >= 0 && ballBrickRow < BRICK_ROWS) {
    if (isBrickAtColRow(ballBrickCol, ballBrickRow)) {
  
      brickGrid[ballBrickRow][ballBrickCol] = false;

      var previousBallX = ballX - ballSpeedX;
      var previousBallY = ballY - ballSpeedY;
      var previousBrickCol = Math.floor(previousBallX / BRICK_WIDTH);
      var previousBrickRow = Math.floor(previousBallY / BRICK_HEIGHT);

      var bothTestsFailed = true;

      if (previousBrickCol != ballBrickCol) {
        if (isBrickAtColRow(previousBrickCol, ballBrickRow) == false) {
          ballSpeedX *= -1;
          bothTestsFailed = false;
        }
      }

      if (previousBrickRow != ballBrickRow) {
        if (isBrickAtColRow(previousBrickCol, ballBrickRow) == false) {
          ballSpeedY *= -1;
          bothTestsFailed = false;
        }
      }

      if (bothTestsFailed) { //armpit case prevents the ball from going through when both corners are covered
        ballSpeedX *= -1;
        ballSpeedY *= -1;
      }
    }
  }
}



function ballPaddleCollision() {
  var paddleTop = canvas.height - PADDLE_TO_BOTTOM;
  var paddleBottom = paddleTop + PADDLE_HEIGHT;
  var paddleLeft = paddleX;
  var paddleRight = paddleLeft + PADDLE_WIDTH;

  if (ballY + ballRadius > paddleTop && //below the top of the paddle
    ballY < paddleBottom && //above the bottom of the paddle
    ballX + ballRadius > paddleLeft && //right of the left side of the paddle
    ballX - ballRadius < paddleRight) { //left of the right side of the paddle

    ballSpeedY *= -1;

    var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2;
    var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
    ballSpeedX = ballDistFromPaddleCenterX * 0.35;
  }
}


function updateMousePosition(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;

  paddleX = mouseX - (PADDLE_WIDTH / 2);
}


function drawPaddle() {
  rect(paddleX, canvas.height - PADDLE_TO_BOTTOM, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

function drawMouse() {

  text(`(${mouseX}, ${mouseY})`, mouseX, mouseY, 'yellow', '12px Arial');

  var mouseBrickCol = Math.floor(mouseX / BRICK_WIDTH);
  var mouseBrickRow = Math.floor(mouseY / BRICK_HEIGHT);
  var brickIndexUnderMouse = rowColToArrayIndex(mouseBrickCol, mouseBrickRow);
  text(mouseBrickCol + "," + mouseBrickRow + ":" + brickIndexUnderMouse, 200, 100, 'yellow', '12px Arial');
}