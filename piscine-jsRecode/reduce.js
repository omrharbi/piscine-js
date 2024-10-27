function fold(arr, func, acc) {
    let c = acc
    for (let index = 0; index < arr.length; index++) {
        c = func(c, arr[index], index, arr)

    }
    return c
}
function foldRight(arr, func, acc) {
    let c = acc
    for (let index = arr.length-1; index >= 0; index--) {
        c = func(c, arr[index], index, arr)
    }
    return c
}
function reduce(arr, func, acc=arr[0]) {
    if(arr.length<=1){return console.error("error");}
    for (let index = 0; index < arr.length; index++) {
        acc = func(acc, arr[index] )
    }
    return acc
}

const adder = (a, b) => a + b
console.log(reduce([1, 2, 3], adder));
 