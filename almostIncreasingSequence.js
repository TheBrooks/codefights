/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/
function almostIncreasingSequence(sequence) {
    let canRemoved = true;
    for(let i = 1; i <= sequence.length-1; i++){
        if (sequence[i-1] >= sequence[i]){
            if(canRemoved){
                canRemoved = false;
                if( i-2 >= 0 && sequence[i-2] >= sequence[i]){
                    sequence.splice(i,1);
                }
                else {
                    sequence.splice(i - 1, 1);
                }
                
                i -= 2
            }
            else{
                return false;
            }
        }
    }
    
    return true;
}