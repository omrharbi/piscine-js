function deepCopy(arrObj) {
    if (Array.isArray(arrObj)) {
        let dp = arrObj.map((x) => deepCopy(x))
        return dp
    }
    if (typeof arrObj === 'object' && !(arrObj instanceof RegExp) ) {
        let newObje = {}
        for (let key in arrObj) {
            if (arrObj.hasOwnProperty(key)) {
                newObje[key] = deepCopy(arrObj[key])
            }
        }
        return newObje
    }
    return arrObj
}

console.log(deepCopy([console.log, /hello/]));
