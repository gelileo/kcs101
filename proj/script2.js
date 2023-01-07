
var canvas, canvasContext;

//bricks variables and constants
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;
const BRICK_COLS = 5;
const BRICK_GAP = 2;
const BRICK_ROWS = 4;
const framesPerSecond = 30;

var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;

//mouse location variables;
var mouseX;
var mouseY;

// Fires after the page is finished loading
window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  setInterval(updateAll, 1000 / framesPerSecond);
  canvas.addEventListener('mousemove', updateMousePosition);

  drawAll();
}

function updateAll() {
  drawAll()
}

function drawBricks() {
  brick(0, 0, BRICK_WIDTH, BRICK_HEIGHT)
}

function rowColToArrayIndex(col, row) {
  return col + row * BRICK_COLS;
}

function drawAll() {
  //background
  rect(0, 0, canvas.width, canvas.height, 'black');

  //bricks
  drawBricks();
  drawText();
  drawCircle();
  drawMouse();
}

function drawCircle() {
  circle(canvas.width / 2, 200, 20, 'yellow');
}

function drawText() {
  text("I AM A TEXT", canvas.width / 2, 150, 'white', 'bold 1em Arial', 'center');
}

function drawMouse() {
  // mouse location
  let align = "center";
  if (mouseX < 100.0) {
    align = "left";
  } else if (mouseX > (canvas.width - 100.0)) {
    align = "right"
  }

  let anchorY = mouseY;
  if (mouseY < 12.0)
    anchorY += 12.0;

  text(`(${mouseX}, ${mouseY})`, mouseX, anchorY, 'yellow', '12px Arial', align);
}


// function drawBricks() {
//   for (var row = 0; row < BRICK_ROWS; row++) {
//     for (var col = 0; col < BRICK_COLS; col++) {
//       brick((BRICK_WIDTH * col), 
//             BRICK_HEIGHT * row,
//         BRICK_WIDTH - BRICK_GAP,
//         BRICK_HEIGHT - BRICK_GAP)
//     }
//   }//end of brick for
// }//end of drawBricks


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


function drawMouse2() {

  text(`(${mouseX}, ${mouseY}), ${paddleX}`, mouseX, mouseY, paddleX, 'yellow', '12px Arial');

  // var mouseBrickCol = Math.floor(mouseX / BRICK_WIDTH);
  // var mouseBrickRow = Math.floor(mouseY / BRICK_HEIGHT);
  // var brickIndexUnderMouse = rowColToArrayIndex(mouseBrickCol, mouseBrickRow);
  // text(mouseBrickCol + "," + mouseBrickRow + ":" + brickIndexUnderMouse, 200, 100, 'yellow', '12px Arial');
}

function updateMousePosition(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left;
  mouseY = evt.clientY - rect.top;
 
  
  // if (ballSpeedX == 0 && ballSpeedY == 0) {
  //   ballX = mouseX;
  // }
}