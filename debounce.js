function debounce(callback, time) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), time);
    };
}

function opDebounce(callback, time, options = {}) {
    let timeout;
    return (...args) => {
        if (options.leading && !timeout) {
            callback(...args)
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), time);
    }
}

