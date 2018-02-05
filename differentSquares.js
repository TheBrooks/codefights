/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.

[output] integer

The number of different 2 × 2 squares in matrix.
*/
function differentSquares(matrix) {
    const existingSquares = new Set();
    for(let x = 0; x < matrix.length - 1; x++){
        for(let y = 0; y < matrix[0].length - 1; y++){
            let currentSquare = `${matrix[x][y]},${matrix[x+1][y]},${matrix[x][y+1]},${matrix[x+1][y+1]}`;
            existingSquares.add(currentSquare);
        }
    }
    return existingSquares.size;
}
