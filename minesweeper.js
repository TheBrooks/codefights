/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]       
Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 5,
2 ≤ matrix[0].length ≤ 5.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.
*/
function minesweeper(matrix) {
    let resultArr = [];
    for(let x = 0; x < matrix.length; x++){
        let mineRow = []
        for(let y =0; y < matrix[0].length; y++){
            var mines = 0;
            mines += (x-1 >= 0 && y-1 >= 0 && matrix[x-1][y-1])? 1:0;
            mines += (x-1 >= 0 && matrix[x-1][y])? 1:0;
            mines += (x-1 >= 0 && y+1 < matrix[0].length && matrix[x-1][y+1])? 1:0;
            mines += (y-1 >= 0 && matrix[x][y-1])? 1:0;
            mines += (y+1 < matrix[0].length && matrix[x][y+1])? 1:0;
            mines += (x+1 < matrix.length && y-1 >= 0 && matrix[x+1][y-1])? 1:0;
            mines += (x+1 < matrix.length && matrix[x+1][y])? 1:0;
            mines += (x+1 < matrix.length && y+1 < matrix[0].length && matrix[x+1][y+1])? 1:0;
            
            mineRow.push(mines)
        }
        resultArr.push(mineRow);
    }
    return resultArr;
}
