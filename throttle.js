function throttle(collback, time) {
    let timeout = 0
    return (...arg) => {
        let now = new Date().getTime()
        if (now - timeout < time) return
        timeout = now
        collback(...arg)
    }
}

function opThrottle(callback, time = 1000, option = {}) {
    let timeout = null;
    let lastCallContext = null;
    let lastCallArgs = null;

    const later = () => {
        if (option.trailing && lastCallArgs) {                        
            callback.apply(lastCallContext, lastCallArgs);
            lastCallContext = null;
            lastCallArgs = null;
            timeout = setTimeout(later, time);
        } else {
            timeout = null;
        }
    };

    return function (...args) {
        if (timeout) {   
            lastCallContext = this;
            lastCallArgs = args;
            return;
        }
        if (option.leading) {
            callback(...args);
        } else {
            lastCallContext = this;
            lastCallArgs = args;
        }

        timeout = setTimeout(later, time);
    };
}
