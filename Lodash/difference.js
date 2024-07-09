
// Using indexOf
// O(n^2) time complexity，O(n) space complexity
function _difference(arrayA, arrayB) {
    let result = [];
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayB.indexOf(arrayA[i]) === -1) {
            result.push(arrayA[i]);
        }
    }
    return result;
}

// Using Set
// O(1) time complexity，O(n) space complexity
function difference(arrayA, arrayB) {
    let setB = new Set(arrayB);
    let result = arrayA.filter(item => !setB.has(item));
    return result;
}

console.log(difference([1, 2, 3], [1, 2, 4])); // [3]
console.log(difference([1, 'a', 3], [1, 'a', 4])); // [3]
console.log(difference([1, 2, 3], [1, 2, 3])); // []
