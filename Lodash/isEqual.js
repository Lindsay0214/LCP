function isEqual(value, other) {
    if (typeof value !== "object" && typeof other !== "object") {
        const isValueNaN = Number.isNaN(value);
        const isOtherNaN = Number.isNaN(other);

        if (isValueNaN && isOtherNaN) {
            return true;
        }

        return value === other;
    }

    if (value === null && other === null) {
        return true;
    }

    if (typeof value !== typeof other) {
        return false;
    }

    if (value === other) {
        return true;
    }

    if (Array.isArray(value) && Array.isArray(other)) {
        if (value.length !== other.length) {
            return false;
        }

        for (let i = 0; i < value.length; i++) {
            if (!isEqual(value[i], other[i])) {
                return false;
            }
        }

        return true;
    }

    if (Array.isArray(value) || Array.isArray(other)) {
        return false;
    }

    if (Object.keys(value).length !== Object.keys(other).length) {
        return false;
    }

    for (const [k, v] of Object.entries(value)) {
        if (!(k in other)) {
            return false;
        }

        if (!isEqual(v, other[k])) {
            return false;
        }
    }

    return true;
}


const object = { a: 1, b: [2, 3] };
const other = { a: 1, b: [2, 3] };

isEqual(object, other); // => true
