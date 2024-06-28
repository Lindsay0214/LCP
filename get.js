function get (object, path, defaultValue) {
    const pathArray = path.replace(/\[(\w+)\]/g, '.$1').split('.')
    let result = object
    for (let key of pathArray) {
        result = result != null ? result[key] : undefined

        if (result === undefined) {
            return defaultValue
        }
    }
    return result
}


const object = { a: [{ b: { c: 3 } }] };
console.log(get(object, "a[0].b.c")); //=> 3
console.log(get(object, 'a[0][b][c]')); //=> 3
console.log(get(object, "a[100].b.c", "1")); //=> 1
