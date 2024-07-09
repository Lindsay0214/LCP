function _dropWhile(array, predicate) {
    let index = 0

    while (index < array.length && predicate(array[index], index, array)) {
        index++
    }

    return array.slice(index)
}

function dropWhile(array, predicate) {
    let droppedCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i], i, array)) {
            break;
        }
        droppedCount++;
    }

    return array.slice(droppedCount);
}



dropWhile([0, 1, 2], (value) => value < 5);
dropWhile([0, 6, 1, 2], (value) => value < 5)
