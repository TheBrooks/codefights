/*
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 109.

[output] boolean

true if all digits of n are even, false otherwise.
*/
function evenDigitsOnly(n) {
    return n.toString().split('').filter((digit)=> parseInt(digit) % 2).length == 0
}