function _dropRightWhile (array, predicate) {
  let index = array.length - 1

  while (index >= 0 && predicate(array[index], index, array)) {
      index--
  }

  return array.slice(0, index+1)
}

function dropRightWhile(array, predicate) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (!predicate(array[i], i, array)) {
            return array.slice(0, i + 1);
        }
    }
    return [];
}



dropRightWhile([1, 2, 3, 4, 5, 6], (value) => value < 4) // [1, 2, 3]
dropRightWhile([10, 20, 30, 40, 50, 10], (value) => value !== 10); // [10, 20, 30, 40, 50, 10]
