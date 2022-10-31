var canvas, canvasContext;

//bricks variables and constants
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 20;
const BRICK_COLS = 5;
const BRICK_GAP = 2;
const BRICK_ROWS = 4;

var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;

// Fires after the page is finished loading
window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  drawAll();
}

function drawBricks() {
  brick(0,0, BRICK_WIDTH, BRICK_HEIGHT)
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
}

function drawCircle() {
  circle(canvas.width / 2, 200, 20, 'yellow');
}

function drawText() {
  text("I AM A TEXT", canvas.width / 2, 150, 'white', 'bold 1em Arial', 'center');
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

// function updateAll() {
//   drawAll();
// }