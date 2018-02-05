/*
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer
*/
function digitsProduct(product) {
    let originalProduct = product;
    if (product === 1) {
      return 1;
    }
    if (product === 0) {
      return 10;
    }
    let digitBreakDown = [];
    let count = 0;
    for( let i = 9; i >= 2; i--) {
        while(product%i == 0){
          product/=i;
          digitBreakDown.push(i);
        }
    }
    if (digitBreakDown.length == 0 || digitBreakDown.reduce((total,val) => total = (total ==0 ? 1: total ) *  val) !== originalProduct) {
      return -1;
    }
    return parseInt(digitBreakDown.sort((a,b)=> a-b).join(''));
}