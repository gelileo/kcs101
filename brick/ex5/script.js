var canvas, canvasContext;

var maximumScore = 0;
var playerScore = 0;

//bricks variables and constants
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;
const BRICK_COLS = 5;
const BRICK_GAP = 2;
const BRICK_ROWS = 4;
const BRICK_COLOR = '#B4693B';
// var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);

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

// Fires after the page is finished loading
window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  setInterval(updateAll, 1000 / framesPerSecond);
  brickReset();
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
      var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
      // if(brickGrid[arrayIndex]) {
      //    rect((BRICK_WIDTH * eachCol), BRICK_HEIGHT * eachRow, BRICK_WIDTH - BRICK_GAP, BRICK_HEIGHT - BRICK_GAP, '#B4693B');
      // }
      if (brickGrid[eachRow][eachCol]) {
        rect((BRICK_WIDTH * eachCol), BRICK_HEIGHT * eachRow, BRICK_WIDTH - BRICK_GAP, BRICK_HEIGHT - BRICK_GAP, '#B4693B');
      }//end of brick drawing if true
    }
  }//end of brick for
}//end of drawBricks

// function drawBricks() {
//   for (var eachRow = 0; eachRow < BRICK_ROWS; eachRow++) {
//     for (var eachCol = 0; eachCol < BRICK_COLS; eachCol++) {
//       brick((BRICK_WIDTH * eachCol), BRICK_HEIGHT * eachRow,
//         BRICK_WIDTH - BRICK_GAP,
//         BRICK_HEIGHT - BRICK_GAP);
//     }
//   }//end of brick for
// }//end of drawBricks


function brickReset() {
  bricksLeft = 0;

  var i;

  // for(i = 0; i < 3 * BRICK_COLS; i++) {
  //   brickGrid[i] = false;
  // }

  for (i = 0; i < BRICK_ROWS; i++) {
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
  // for(i=0; i < BRICK_COLS * BRICK_ROWS; i++) {

  //   if(Math.random() < 0.5) {
  //     brickGrid[i] = true;
  //     bricksLeft++;//counts how many bricks there are on the scene and stores the value
  //     maximumScore += 10;
  //   }else {
  //     brickGrid[i] = false;
  //   }//end of else (random check)
  // }//end of for
  // console.log(maximumScore);
}//end of brickReset

function isBrickAtColRow(col, row) {
  if (col >= 0 && col < BRICK_COLS && row >= 0 && row < BRICK_ROWS) {
    // var brickIndexUnderCoord = rowColToArrayIndex(col, row);
    // return brickGrid[brickIndexUnderCoord];

    return brickGrid[row][col];
  } else {
    return false;
  }
}

function ballBrickCollision() {
  var ballBrickCol = Math.floor(ballX / BRICK_WIDTH);
  var ballBrickRow = Math.floor(ballY / BRICK_HEIGHT);
  var brickIndexUnderBall = rowColToArrayIndex(ballBrickCol, ballBrickRow);

  if (ballBrickCol >= 0 && ballBrickCol < BRICK_COLS && ballBrickRow >= 0 && ballBrickRow < BRICK_ROWS) {
    if (isBrickAtColRow(ballBrickCol, ballBrickRow)) {
      // brickGrid[brickIndexUnderBall] = false;

      brickGrid[ballBrickRow][ballBrickCol] = false;

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
