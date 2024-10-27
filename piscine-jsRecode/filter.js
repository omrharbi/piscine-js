function filter(arr, func) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index], index, arr)) {
            result.push(arr[index])
        }
    }
    return result
}

function reject(arr, func) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        if (!func(arr[index], index, arr)) {
            result.push(arr[index])
        }
    }
    return result
}
function partition(arr, cor) {
    return [filter(arr, cor), reject(arr, cor)]
}