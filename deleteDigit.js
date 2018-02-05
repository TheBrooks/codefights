/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer
*/
function deleteDigit(n) {
    const nLength = Math.floor(Math.log10(n) + 1);
    let maxNum = 0;
    const nStr = n.toString();
    for(let i = 0; i < nLength; i++){
        maxNum = Math.max(parseInt(nStr.slice(0,i) + nStr.slice(i+1, nLength)),maxNum)
    }
    return maxNum;
}
