/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 5,
1 ≤ picture[i].length ≤ 5.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
*/
function addBorder(picture) {
    var borderedPic = Array(picture.length + 2);
    borderedPic[0] = Array(picture[0].length + 2).fill('*').join('');
    var row;
    for(row = 0;  row < picture.length; row++){
        borderedPic[row+1] = ['*',...picture[row], '*'].join('');
    }
    borderedPic[row+1] = Array(picture[0].length + 2).fill('*').join('');
    return borderedPic;
}
