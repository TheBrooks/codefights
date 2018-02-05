/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".

Input/Output

[execution time limit] 4 seconds (js)

[input] string st

A string consisting of lowercase latin letters.

Guaranteed constraints:
3 ≤ st.length ≤ 10.

[output] string
*/
function buildPalindrome(st) {
    let startIdx = Math.floor(st.length/2);
    
    let palendroneIdx = st.length - 1;
    let include = true;
    for(let i = 1; i < st.length+1; i++){
        
        var excludingPal = st.slice(0,i) + reverseStr(st.slice(0,Math.max(i-1,0)));
        if(excludingPal.indexOf(st) == 0){
            return excludingPal;
        }
        
        var includingPal = st.slice(0,i) + reverseStr(st.slice(0,i));
        if(includingPal.indexOf(st) == 0){
            return includingPal;
        }
    }
}

function reverseStr(str){
    return str.split('').reverse().join('');
}
