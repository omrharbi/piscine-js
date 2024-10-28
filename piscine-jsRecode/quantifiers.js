function every(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if (!func(arr[index])) {
            return false
        }
    }
    return true
}

function some(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) { return true }
    }
    return false
}
function none(arr,func){
    return !some(arr,func)
}
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13,50];

console.log(every(array1, isBelowThreshold));