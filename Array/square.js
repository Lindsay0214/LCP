function square (array) {
    return array.map(value => value * value);
}

console.log(square([1, 2, 3])); // [1, 4, 9]

Array.prototype.square = function() {
    const squareArray = []
    for (let i = 0; i < this.length; i++) {
        squareArray.push(this[i] * this[i])
    }
    return squareArray
}
