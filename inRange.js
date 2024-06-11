function _inRange (value, start, end) {
    if (!end) {
        end = start;
        start = 0;
    }
    if (start > end) {
        [start, end] = [end, start];
    }
    return value >= start && value < end;
}

function inRange(value, start, end = 0) {
    return value >= Math.min(start, end) && value < Math.max(start, end)
}

inRange(3, 2, 4) // true
inRange(1, 2, 4) // false
inRange(5, 2, 4) // false
