function map(arr, func) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        result[index] = func(arr[index], index, arr)
    }
    return result
}
function flatMap(arr, func) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const s = func(arr[i], i, arr)
        if(Array.isArray(s)){
            result.push(...s)
        }else{
            result.push(s)
        }
    }
    return result
} 