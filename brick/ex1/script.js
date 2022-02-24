


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

// Fires after the page is finished loading
window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  drawAll();
}

function updateAll() {
  // moveAll();
  drawAll();
}



function rowColToArrayIndex(col, row) {
  return col + row * BRICK_COLS;
}


function drawBricks() {
  for(var eachRow = 0; eachRow < BRICK_ROWS; eachRow++) {
    for(var eachCol = 0; eachCol < BRICK_COLS; eachCol++) {
    brick((BRICK_WIDTH*eachCol), BRICK_HEIGHT*eachRow, 
    BRICK_WIDTH-BRICK_GAP, 
    BRICK_HEIGHT-BRICK_GAP)
    }
  }//end of brick for
}//end of drawBricks

function drawAll() {
  //background
  rect(0, 0, canvas.width, canvas.height, 'black');

  //bricks
  drawBricks();
  drawText();
  drawCircle();
}

function drawCircle() {
   circle(canvas.width /2, 250, 20, 'yellow');
}


function drawText() {
  text("I AM A TEXT", canvas.width/2, 150, 'white', 'bold 1em Arial', 'center');
}