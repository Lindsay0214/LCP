function removeDuplicates (array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

// Set
function removeDuplicatesUsingSet (array) {
    return Array.from(new Set(array));

    // Using spread syntax
    // return [...new Set(array)];
}
