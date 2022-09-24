function lower(matrix, row, col) {
  let i, j;
  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      if (i < j) {
        document.write("0" + " ");
      }
      else
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
  }
}

// Method to form upper
// triangular matrix
function upper(matrix, row, col) {
  let i, j;
  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      if (i > j) {
        document.write("0" + " ");
      }
      else
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
  }
}

// Driver Code

let matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
let row = 3, col = 3;

document.write("Lower triangular matrix: <br>");
lower(matrix, row, col);

document.write("Upper triangular matrix: <br>");
upper(matrix, row, col);