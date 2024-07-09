function debounce (fn, time) {
    let timeId
    return function (...args) {
        clearTimeout(timeId)
        timeId = setTimeout(() => {
            fn.apply(args)
        }, time)
    }
}
