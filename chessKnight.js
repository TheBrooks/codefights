/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
chessKnight(cell) = 2.



For cell = "c2", the output should be
chessKnight(cell) = 6.



Input/Output

[execution time limit] 4 seconds (js)

[input] string cell

String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

[output] integer
*/
function chessKnight(cell) {
    let [numX, numY] = convertToNumberedCoord(cell);
    let possibleMoveCount = 0;
    possibleMoveCount += isValidCoord(numX + 2, numY + 1) ? 1 : 0;
    possibleMoveCount += isValidCoord(numX + 1, numY + 2) ? 1 : 0;
    possibleMoveCount += isValidCoord(numX + 2, numY - 1) ? 1 : 0;
    possibleMoveCount += isValidCoord(numX + 1, numY - 2) ? 1 : 0;
    possibleMoveCount += isValidCoord(numX - 2, numY + 1) ? 1 : 0;
    possibleMoveCount += isValidCoord(numX - 1, numY + 2) ? 1 : 0;
    possibleMoveCount += isValidCoord(numX - 1, numY - 2) ? 1 : 0;
    possibleMoveCount += isValidCoord(numX - 2, numY - 1) ? 1 : 0;
    return possibleMoveCount;
}

function convertToNumberedCoord(cellStr) {
    return [cellStr.toUpperCase().charCodeAt(0) - 64, parseInt(cellStr[1])];
}
    
function isValidCoord(numX, numY) {
    return numX > 0 && numX < 9 && numY > 0 && numY < 9;
}