function fill (array, value, start = 0 , end = array.length) {
    if (start < 0) {
        start = array.length + start;
    }

    if (end < 0) {
        end = array.length + end
    }

    if (end > array.length) {
        end = array.length
    }

    for (let i = start; i < end; i++) {
        array[i] = value;
    }

    return array;
}

console.log(fill([1, 2, 3], 'a')); // ['a', 'a', 'a']
console.log(fill(Array(3), 2)); // [2, 2, 2]
console.log(fill([4, 6, 8, 10], '*', 1, 3)); // [4, '*', '*', 10]
console.log(fill([1, 2, 3], 4, 1)); // [1, 4, 4]
