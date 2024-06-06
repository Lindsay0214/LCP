function _compact (array) {
    const result = [];
    for (const value of array) {
        if (value) {
            result.push(value);
        }
    }
    return result;
}

function compact (array) {
    return array.filter(Boolean);
}

compact([0, 1, false, 2, '', 3, 'hello']) // [1, 2, 3, 'hello']
compact([null, undefined, NaN, ' ']) // [' ']
compact([{ name: 'Alice' }, null, { age: 30 }, undefined]) // [{ name: 'Alice' }, { age: 30 }]
