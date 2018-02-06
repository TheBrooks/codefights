/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Matrix size, a positive integer.

Guaranteed constraints:
3 ≤ n ≤ 10.

[output] array.array.integer
*/
function spiralNumbers(n) {
    let spiralMatrix = [...Array(n).keys()].map(index => Array(n).fill(0));
    let maxNumber = n*n;
    let curNumber = 1;
    let xPos = 0, yPos = 0;
    
    let setDirection = RIGHT_DIRECTION;
    
    while (curNumber <= maxNumber) {
        spiralMatrix[yPos][xPos] = curNumber;
        curNumber++;
      
        setDirection = getNextDirection([...spiralMatrix], xPos, yPos, setDirection);
        switch(setDirection){
                case RIGHT_DIRECTION:
                    xPos++;
                break;
            case DOWN_DIRECTION:
                    yPos++;
                break;
            case LEFT_DIRECTION:
                    xPos--;
                break;
            case UP_DIRECTION:
                    yPos--;
                break;
            default: 
                return false;
        }
    }
    return spiralMatrix;
}

function getNextDirection(currentMatrix, xPos, yPos, curDirection) {
    switch(curDirection){
            case RIGHT_DIRECTION:
                if(!isValidNextPos([...currentMatrix], xPos+1, yPos)){
                    return DOWN_DIRECTION;
                }
                break;
            case DOWN_DIRECTION:
                if (!isValidNextPos([...currentMatrix], xPos, yPos+1)){
                    return LEFT_DIRECTION;
                }
                break;
            case LEFT_DIRECTION:
                if(!isValidNextPos([...currentMatrix], xPos-1,yPos)) {
                    return UP_DIRECTION;
                }
                break;
            case UP_DIRECTION:
                if(!isValidNextPos([...currentMatrix], xPos, yPos-1)) {
                    return RIGHT_DIRECTION;
                }
                break;
            default: 
                return false;
        }
    return curDirection;
}


function isValidNextPos(currentMatrix, x, y){
    return x >= 0 && x < currentMatrix.length && y >= 0 && y < currentMatrix[0].length && currentMatrix[y][x] === 0;
}

const RIGHT_DIRECTION = 'RIGHT_DIRECTION';
const DOWN_DIRECTION = 'DOWN_DIRECTION';
const LEFT_DIRECTION = 'LEFT_DIRECTION';
const UP_DIRECTION = 'UP_DIRECTION';