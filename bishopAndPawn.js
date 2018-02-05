/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


Example

For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.



For bishop = "h1" and pawn = "h3", the output should be
bishopAndPawn(bishop, pawn) = false.



Input/Output

[execution time limit] 4 seconds (js)

[input] string bishop

Coordinates of the white bishop in the chess notation.

[input] string pawn

Coordinates of the black pawn in the same notation.

[output] boolean

true if the bishop can capture the pawn, false otherwise.
*/

function bishopAndPawn(bishop, pawn) {
    let bCoord = bishop.split('');
    let pCoord = pawn.split('');
    bCoord[0] = convertLetterToDigitCoord(bCoord[0]); // 3 1
    pCoord[0] = convertLetterToDigitCoord(pCoord[0]); // 5 5
    
    return Math.abs(bCoord[0] - pCoord[0]) - Math.abs(bCoord[1] - pCoord[1]) === 0;
}

function convertLetterToDigitCoord(letterCoord) {
    return letterCoord.charCodeAt(0) - 64;
}
