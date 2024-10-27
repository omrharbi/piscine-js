function adder(arr, op = 0) {
    let c = op
    return arr.reduce((acc, cu) => {
        return acc + cu
    }, c)
}
function sumOrMul(arr, pa = 0) {
    return arr.reduce(function (acc, curr) {
        let c = 1
        if (curr % 2 === 0) {
            c = curr * acc
        } else {
            c = curr + acc
        }
        return c
    }, pa)
}

function funcExec(arr, n) {
    return arr.reduce((r, func) => {
        return func(r)
    }, n)
} 