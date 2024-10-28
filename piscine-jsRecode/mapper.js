function map(arr, func) {
    let c = []
    for (let i = 0; i < arr.length; i++) {
        c.push(func(arr[i], i, arr))
    }
    return c
}

function flatMap(arr, func) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        let element = func(arr[index], index, arr)
        if (Array.isArray(element)) {
            result.push(...element)
        } else {
            result.push(element)

        }
    }
    return result
}

let arr = [1, 2, 3, 4]
console.log(map(arr, function (c,i,arr) {
    console.log(c,i,arr);

}));
