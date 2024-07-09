function getAverage (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return Math.floor(sum / array.length)
}

console.log(getAverage([1.2, 2, 3])) // 2

function _getAverage(array) {
    return Math.floor(array.reduce((sum, value) => sum + value, 0) / array.length);
}
