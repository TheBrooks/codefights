/*
Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

Example

For inputArray = ["aba", "bbb", "bab"], the output should be
stringsRearrangement(inputArray) = false;

All rearrangements don't satisfy the description condition.

For inputArray = ["ab", "bb", "aa"], the output should be
stringsRearrangement(inputArray) = true.

Strings can be rearranged in the following way: "aa", "ab", "bb".
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array of strings of lowercase letters.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 15.

[output] boolean
*/

function stringsRearrangement(inputArray) {
    var graph = []
    for(var str of inputArray) {
        var newNode = createNode(str, graph.length);
        for (var i=0; i < graph.length; i++){
            if(nodesAreAdjacent(str, graph[i].val)){
                newNode.adjIdx.push(i);
                graph[i].adjIdx.push(graph.length);
            }
        }
        graph.push(newNode);
    }
    return allNodesPath(graph);
}

function createNode(str, idx) {
    return {
        idx: idx,
        val: str,
        adjIdx: []
    }
}

function nodesAreAdjacent(str1,str2){
    // return true is strings differ by exactly one letter
    var differCount = 0;
    for(var i = 0; i< str2.length; i++){
        if(str1[i] != str2[i])
            differCount++;
    }
    return differCount === 1;
}

function allNodesPath(graph){
    let longestPath = 0;
    let visitedNodes = new Set([])
    for(let startIdx = 0; startIdx < graph.length; startIdx++){
        
        console.log(startIdx);
        longestPath = checkAdjacentNodes(startIdx, graph, visitedNodes) -1;
        
        visitedNodes = new Set([])
        if(longestPath === graph.length){
            return true;
        }
    }
    return false;
}

function checkAdjacentNodes(curIdx, graph, visitedNodes){
    if (visitedNodes.has(curIdx)){
        return 1;
    }
    visitedNodes.add(curIdx);
    var curNode = graph[curIdx];
    var adjIdxs = curNode.adjIdx;
    var longestPaths = (adjIdxs.map(idx=> checkAdjacentNodes(idx,graph,new Set(visitedNodes))));
    return 1 + Math.max(...longestPaths);
}
