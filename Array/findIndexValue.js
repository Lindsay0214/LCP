// implementation array.prototype.at
// ensure the index is within the bounds of the array
// if the index is negative, it will start from the end of the array
// if the index is out of bounds, it will return undefined

Array.prototype.At = function(index) {
    if (index >= 0) {
        return this[index];
    } else {
        return this[this.length + index];
    }
}
