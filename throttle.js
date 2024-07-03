// delayed execution
function throttle (fn, delay = 500) {
  let timer = null
  return function (...args) {
      if (!timer) {
          timer = setTimeout(() => {
              fn.apply(this, args)
              timer = null
          }, delay)
      }
  }
}

// immediate execution
function _throttle(fn, delay = 500) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            timer = null;
        }, delay);

        fn.apply(this, args);
    };
}

// timestamp
function __throttle(fn, delay ) {
    let lastTime = 0
    return function () {
        const now = new Date().getTime()
        if (now - lastTime >= delay) {
            fn()
            lastTime = now
        }
    }
}

