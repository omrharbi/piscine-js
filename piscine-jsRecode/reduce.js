function fold(arr, func, acc = 0) {
    let c = acc
    console.log(c,acc);
    
    for (let index = 0; index < arr.length; index++) {
        c = func(c, arr[index], index, arr)
    }
    return c
}
function foldRight(arr, func, acc = 0) {
    let c = acc
    for (let index = arr.length - 1; index >= 0; index--) {
        c = func(c, arr[index], index, arr)
    }
    return c
}
function reduce(arr, func, acc = arr[0]) {
    let c = acc
    for (let index = 1; index < arr.length; index++) {
        c = func(c, arr[index], index, arr)
    }
    return c
}

const adder = (a, b) => a + b
console.log(fold([1, 2, 3], adder,2));
