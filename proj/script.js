
var canvas, canvasContext;
const BRICK_GAP = 4;
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;

const column_count = 5;
const row_count = 4;

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

// An array that stores brick state (exist or not)
// Reset at beginning
var brickGrid = [];

// Fires after the page is finished loading
window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  // add a listener so that updateMousePosition() 
  // is called when mouse moves
  canvas.addEventListener('mousemove', updateMousePosition);

  setInterval(updateAll, 1000 / framesPerSecond);

  brickReset();

  clearCanvas();
}

function brickReset() {
  for (let row = 0; row < row_count; row++) {
    brickGrid[row] = [];
    for (let col = 0; col < column_count; col++) {
      //Math.random() returns a number between 0 and 1
      brickGrid[row][col] = Math.random() > 0.3 ? 1 : 0;
    }
  }
  console.log(brickGrid);
}

// // Check if grid [row, col] has a brick
function isBrickAtColRow(col, row) {
  // make sure col and row are in range
  if (col >= 0 && col < column_count && 
      row >= 0 && row < row_count) {
    // check brickGrid value
    return brickGrid[row][col] == 1;
  } else {
    return false;
  }
}

// check if there's break at given coordinates
function isThereBrickAtPoint(x, y) {
  var col = Math.floor(x / BRICK_WIDTH);  // x falls on the col-th column
  var row = Math.floor(y / BRICK_HEIGHT); // y falls on the row-th column

  return isBrickAtColRow(col, row);    
}

// Returns true when
// - there is a brick at point (x,y)
// - reset value in brickGrid (so we no longer draw it)
function removedBrickAtPoint(x, y) {
  var col = Math.floor(x / BRICK_WIDTH);  // x falls on the col-th column
  var row = Math.floor(y / BRICK_HEIGHT); // y falls on the row-th column
  if (isBrickAtColRow(col, row)) {
    brickGrid[row][col] = false;
    return true;
  }
  return false;
}
//    __________
// -> |        | <-
//    ----------
//
function hitsSides() {
  const row = Math.floor(ballY / BRICK_HEIGHT);
  
  const col = Math.floor(ballX / BRICK_WIDTH);  
  const previousBallX = ballX - ballSpeedX;
  const previousCol = Math.floor(previousBallX / BRICK_WIDTH);
  if (previousCol != col) {
    // No horizontal neigboring brick on the ball coming side
    if (isBrickAtColRow(previousCol, row) == false) {
      return true;
    }
  }
  return false;
}
//         |
//    _____V____
//    |         | 
//    -----^----
//         |
function hitsBottomOrTop() {
  const col = Math.floor(ballX / BRICK_WIDTH);  
  
  const row = Math.floor(ballY / BRICK_HEIGHT);  
  const previousBallY = ballY - ballSpeedY;
  const previousRow = Math.floor(previousBallY / BRICK_HEIGHT);
  if (previousRow != row) {
    // No vertical neigboring brick on the ball coming side
    if (isBrickAtColRow(col, previousRow) == false) {
      return true;
    }
  }
  return false;
}


function ballHitsBrick() {
  if (removedBrickAtPoint(ballX, ballY)) {
    if (hitsSides()) {
      ballSpeedX *= -1;
    }

    if (hitsBottomOrTop) {
      ballSpeedY *= -1;
    }    
  }  
}

function updateAll() {
  ballHitsPaddle();

  ballHitsBrick();

  ballMovement();

  clearCanvas();

  drawBricks();

  drawMouse();

  drawPaddle();

  drawBall();
}


// returns true if the brick at (row, col)
// should be drawn
function shouldDraw(row, col) {
  return isBrickAtColRow(col, row);
}

function drawBricks() {
  let x = 0;
  let y = 0;
  for (let row = 0; row < row_count; row++) {
    for (let col = 0; col < column_count; col++) {

      if (shouldDraw(row, col)) {
        brick(x, y, BRICK_WIDTH - BRICK_GAP, BRICK_HEIGHT - BRICK_GAP);
      }



      x += BRICK_WIDTH;
    }
    x = 0
    y += BRICK_HEIGHT;
  }
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

function drawBall() {
  circle(ballX, ballY, ballRadius, 'yellow');
}

function drawPaddle() {
  paddleX = mouseX - (PADDLE_WIDTH / 2.0);
  rect(paddleX, canvas.height - PADDLE_DIST_TO_BOTTOM, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

function ball() {
  circle(ballX, ballY, ballRadius, 'yellow');
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

}

function ballHitsPaddle() {
  // find paddle bounds
  var paddleTop = canvas.height - PADDLE_DIST_TO_BOTTOM;
  var paddleBottom = paddleTop + PADDLE_HEIGHT;
  var paddleLeft = paddleX;
  var paddleRight = paddleLeft + PADDLE_WIDTH;
  // When any part of ball fall into the rectangle defined by above bounds
  // since use ball center to tell ball location, we might want 
  // to expand the rectangle by ball radius on all dimensions
  paddleTop -= ballRadius;
  paddleBottom += ballRadius;
  paddleLeft -= ballRadius;
  paddleRight += ballRadius;

  if (ballY > paddleTop &&
    ballY < paddleBottom &&
    ballX > paddleLeft &&
    ballX < paddleRight) {
    // document.getElementById("audio").play();
    ballSpeedY *= -1;

    // horizontal speed based on hit position
    var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2;
    var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
    // console.log(ballX + ' - ' + centerOfPaddleX + ' = ' + ballDistFromPaddleCenterX)

    //   var ratio = ballDistFromPaddleCenterX / (PADDLE_WIDTH / 2);

    //   if ( centerOfPaddleX > ballX) // hit left 
    //   {
    //        // console.log("Ball hits left");
    //       // go right, ballSpeedX
    //       ballSpeedX *= (ratio * 2);
    //   } 
    //   else if ( centerOfPaddleX < ballX) {
    //      // go left
    //     // console.log("Ball hits right");
    //       ballSpeedX *= (ratio * 2);
    //     // console.log("Ball speed: " + ballSpeedX);
    //   }
    // }

    ballSpeedX = ballDistFromPaddleCenterX * 0.35;
  }

}
// function moveAll() {
//   ballHitsPaddle();
//   ballMovement();
// }



// var ballBrickCol = Math.floor(ballX / BRICK_WIDTH);
  // var ballBrickRow = Math.floor(ballY / BRICK_HEIGHT);

  // if (ballBrickCol >= 0 && ballBrickCol < column_count && 
  //     ballBrickRow >= 0 && ballBrickRow < row_count) {
    
  //   if (isBrickAtColRow(ballBrickCol, ballBrickRow)) {

  //     brickGrid[ballBrickRow][ballBrickCol] = false;


  //     var previousBallX = ballX - ballSpeedX;
  //     var previousBallY = ballY - ballSpeedY;
  //     var previousBrickCol = Math.floor(previousBallX / BRICK_WIDTH);
  //     var previousBrickRow = Math.floor(previousBallY / BRICK_HEIGHT);

  //     var bothTestsFailed = true;

  //     if (previousBrickCol != ballBrickCol) {
  //       if (isBrickAtColRow(previousBrickCol, ballBrickRow) == false) {
  //         ballSpeedX *= -1;
  //         bothTestsFailed = false;
  //       }
  //     }

  //     if (previousBrickRow != ballBrickRow) {
  //       if (isBrickAtColRow(ballBrickCol, previousBrickRow) == false) {
  //         ballSpeedY *= -1;
  //         bothTestsFailed = false;
  //       }
  //     }

  //     if (bothTestsFailed) { //armpit case prevents the ball from going through when both corners are covered
  //       ballSpeedX *= -1;
  //       ballSpeedY *= -1;
  //     }
  //   }
  // }
