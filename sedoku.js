/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.



Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer grid

A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.

[output] boolean

true if the given grid represents a correct solution to Sudoku, false otherwise.
*/
function sudoku(grid) {
    // check each row
    for(var line of grid) {
        if(!isSedokuSet(line)){
            return false;
        }
    }
    
    // check each col
    for(let i=0; i<grid.length; i++){
        if(!isSedokuSet( grid.map(lineArr => lineArr[i]) )){
            return false;
        }
    }
    
    // check each square 
    for ( let x=0; x<grid.length; x+=3){
        for( let y=0; y<grid[0].length; y+=3) {
            if(!isSedokuSet([grid[x][y], grid[x+1][y], grid[x+2][y],
                             grid[x][y+1], grid[x+1][y+1], grid[x+2][y+1],
                             grid[x][y+2], grid[x+1][y+2], grid[x+2][y+2]])){
                return false;
            }
        }
    }
        
    return true;
}

function isSedokuSet(sedokuArr){
    return new Set(sedokuArr).size === sedokuArr.length;
}
