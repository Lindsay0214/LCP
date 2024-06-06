function _clamp (target, lower, upper) {
    if (target < lower) {
        return lower;
    } else if (target > upper) {
        return upper;
    } else {
        return target;
    }
}

function clamp (target, lower, upper) {
    return Math.max(lower, Math.min(target, upper));
}

clamp(10, 0, 100); // 10
clamp(-10, 0, 100); // 0
clamp(110, 0, 100); // 100

