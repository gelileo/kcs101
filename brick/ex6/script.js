var canvas, canvasContext;

// score variables
var maximumScore = 0;
var playerScore = 0;
var attempts = 5;
var playerAttempts = attempts;
var showEndingScreen = false;

//bricks variables and constants
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;
const BRICK_COLS = 5;
const BRICK_GAP = 2;
const BRICK_ROWS = 5;
const BRICK_COLOR = '#B4693B';
// leave some space on top for score display
const TOP_EMPTY_ROWS = 2;
var brickGrid = [];
for (var i = 0; i < BRICK_ROWS; i++) {
  brickGrid[i] = new Array(BRICK_COLS);
}
var bricksLeft = 0;


//refresh rate
var framesPerSecond = 30;


//paddle variables and constants
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 10;
const PADDLE_TO_BOTTOM = 60;
var paddleX = 0;


//ball variables
var ballRadius = 10;
var ballX = 0;
var ballY = 0
var ballSpeedX = 0;
var ballSpeedY = 0;

//mouse variables;
var mouseX;
var mouseY;

// Fires after the page is finished loading
window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  canvas.addEventListener('mousemove', updateMousePosition);

  canvas.addEventListener('mousedown', handleMouseClick);
  
  setInterval(updateAll, 1000 / framesPerSecond);
  brickReset();
  
  // initiation
  paddleX = (canvas.width - PADDLE_WIDTH) / 2;
  ballX = canvas.width / 2;
  ballY = canvas.height - PADDLE_TO_BOTTOM - ballRadius / 2;
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
    // ballSpeedY *= -1;
    playerAttempts--;
    ballReset();
  }

  // top
  if (ballY - ballRadius < 0 && ballSpeedY < 0.0) {
    ballSpeedY *= -1;
  }
}

function handleMouseClick(evt) {
  if(showEndingScreen) {
    playerScore = 0;
    maximumScore = 0;
    playerAttempts = attempts;
    brickReset();
    ballReset();
    showEndingScreen = false;
  }

  if(ballSpeedX == 0 && ballSpeedY == 0) {
    ballSpeedX = 0;
    ballSpeedY = 5;
  }
}

function ballReset() {
  if(playerAttempts <= 0) {
    showEndingScreen = true;
  }

  ballX = paddleX + PADDLE_WIDTH / 2;
  ballY = canvas.height - PADDLE_TO_BOTTOM - ballRadius / 2;

  ballSpeedX = 0;
  ballSpeedY = 0;
}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  if(showEndingScreen) {
    return;
  }
  ballBrickCollision();
  ballPaddleCollision();
  ballMovement();
}

function drawAll() {
  //background
  rect(0, 0, canvas.width, canvas.height, 'black');

  if(showEndingScreen) {
    drawEndingScreen();
    return;
  }
  drawText();
  drawBricks();
  drawPaddle();
  drawMouse();
  drawScore();
  ball();
}

function drawEndingScreen() {
  if(playerScore == maximumScore) {
      text("YOU WIN!", canvas.width/2, 100, 'white', 'bold 3em Arial', 'center');
      text("SCORE: " + playerScore, canvas.width/2, 250, 'white', 'bold 2em Arial', 'center');
      text("ATTEMPTS: " + playerAttempts, canvas.width/2, 400, 'white', 'bold 2em Arial', 'center');
      text("Click to continue", canvas.width/2, 550, 'white', 'bold 1.5em Arial', 'center');
    } else {
      text("YOU LOSE!", canvas.width/2, 100, 'white', 'bold 3em Arial', 'center');
      text("SCORE: " + playerScore, canvas.width/2, 250, 'white', 'bold 2em Arial', 'center');
      text("ATTEMPTS: " + playerAttempts, canvas.width/2, 400, 'white', 'bold 2em Arial', 'center');
      text("Click to continue", canvas.width/2, 550, 'white', 'bold 1.5em Arial', 'center');
    }
}

function drawScore() {
  text("Score: " + playerScore, 10, 30, 'white', 'bold 1.4em monospace', 'left');
  text("Attempts: " + playerAttempts, 273, 30, 'white', 'bold 1.4em monospace', 'left');
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

  for (i = 0; i < TOP_EMPTY_ROWS; i++) {
    for (var j = 0; j < BRICK_COLS; j++) {
          brickGrid[i][j] = false;
    }
 
  }
  for (i = TOP_EMPTY_ROWS; i < BRICK_ROWS; i++) {
    for (var j = 0; j < BRICK_COLS; j++) {
      if (Math.random() < 0.5) {
        brickGrid[i][j] = true;
        bricksLeft++;//counts how many bricks there are on the scene and stores the value
        maximumScore += 10;
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

      document.getElementById("clang").play();
      bricksLeft--; //remove brick from the amount
      console.log(bricksLeft);
      playerScore += 10;
      console.log(playerScore);

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

    if (ballSpeedY != 0) {
      document.getElementById("audio").play();
    }
    
    ballSpeedY *= -1;

    var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2;
    var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
    ballSpeedX = ballDistFromPaddleCenterX * 0.35;

    if(bricksLeft == 0) {
      showEndingScreen = true;
    }
  }
}


function updateMousePosition(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;

  paddleX = mouseX - (PADDLE_WIDTH / 2);
  if (ballSpeedX == 0 && ballSpeedY == 0) {
    ballX = mouseX;
  }
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