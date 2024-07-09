function findIndex(array, predicate, fromIndex = 0) {
    const startIndex = fromIndex < 0 ? fromIndex + array.length : fromIndex

    for (let i = startIndex; i < array.length; i++) {
        if (predicate(array[i])) {
            return i
        }
    }

    return -1
}



console.log(findIndex([1, 13, 7, 54], (number => number > 10))) // 1
console.log(findIndex([1, 13, 7, 54], (number => number > 200))) // -1
