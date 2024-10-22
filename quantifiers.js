function every(arr, func) {
     for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) return false
    }
    return true
}
function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return true
    }
    return false
}


function none(arr, func) {
   return !some(arr,func)
}

const everyy = every([43, 30, 16, 57, 10],function (arr) {
    return arr >= 10
});
const nonee = none([43, 30, 16, 57, 10], function (arr) {
    return arr >= 10
});
console.log(everyy,"every"); 
console.log(nonee,"none"); 