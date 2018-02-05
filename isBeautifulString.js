/*
A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

Given a string, check whether it is beautiful.

Example

For inputString = "bbbaacdafe", the output should be
isBeautifulString(inputString) = true;
For inputString = "aabbb", the output should be
isBeautifulString(inputString) = false;
For inputString = "bbc", the output should be
isBeautifulString(inputString) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string of lowercase letters.

Guaranteed constraints:
3 ≤ inputString.length ≤ 50.

[output] boolean
*/
function isBeautifulString(inputString) {
    charCode = 97;
    var codeCountArr = []
    for(let i = charCode; i< charCode + 26; i++){
        codeCountArr.push(charCount(inputString, String.fromCharCode(i)));
    }
    
    
    for( let i = 1; i < codeCountArr.length; i++){
        if(codeCountArr[i] > codeCountArr[i-1]){
            return false;
        }
    }
    return true;
}

function charCount(inputString, char) {
    var re = new RegExp(char,"g");
    var resultsArr = inputString.match(re) || [];
    return resultsArr.length;
}
