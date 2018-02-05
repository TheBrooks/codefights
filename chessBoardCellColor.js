/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.



For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false.



Input/Output

[execution time limit] 4 seconds (js)

[input] string cell1

[input] string cell2

[output] boolean

true if both cells have the same color, false otherwise.
*/
function chessBoardCellColor(cell1, cell2) {
    let coord1 = cell1.split(''); // A 1
    let coord2 = cell2.split(''); // C 3
    coord1[0] = convertLetterCoordToNumber(coord1[0]); // A 1 -> 1 1
    coord2[0] = convertLetterCoordToNumber(coord2[0]); // C 3 -> 3 3

    return !(isDarkCoord(coord1) ^ isDarkCoord(coord2));
}

function convertLetterCoordToNumber(letterCoord){
    return (letterCoord.charCodeAt(0) - 64).toString();
}

function isDarkCoord(coord){
    return parseInt(coord[0]) % 2 === parseInt(coord[1]) % 2;
}