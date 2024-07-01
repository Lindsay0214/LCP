// When we copy the object type value in JS, such as object, array..., we will encounter the problem of shallow copy and deep copy.
// Deep copy is a process in which the copying process occurs recursively. It means first constructing a new collection object and then, recursively, copying the child objects found in the original.
// In contrast, shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object.

let objA = {
    a: 1,
    b: { c: 3 },
};

function _cloneDeep(item) {
    return JSON.parse(JSON.stringify(item));
}

let objB = _cloneDeep(objA);

console.log(objA === objB); // false
console.log(objA.b === objB.b); // false

// structuredClone still in experimental stage
let objC = structuredClone(objA);

console.log(objA === objC); // false
console.log(objA.b === objC.b); // false


function cloneDeep(obj, cache = new WeakMap()) {
    // circular reference, for example:
    // let obj = {};
    // obj.self = obj;
    if (cache.has(obj)) return cache.get(obj)

    // primitive type, date, regexp
    if (obj === null || typeof obj !== "object") return obj
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    const clonedObj = Array.isArray(obj)
        ? []
        : Object.create(Object.getPrototypeOf(obj));

    // for circular reference
    cache.set(obj, clonedObj);

    for (const key of Reflect.ownKeys(obj)) {
        const value = obj[key]
        clonedObj[key] = cloneDeep(value, cache);
    }

    return clonedObj;
}
