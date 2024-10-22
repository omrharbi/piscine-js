function fold(arr, func, acc) {
    let ins = acc
    for (let i = 0; i < arr.length; i++) {
        ins = func(ins, arr[i], i, arr)
    }
    return ins
}
function foldRight(arr, func, acc) {
    let ins = acc
    for (let i = arr.length-1;i>=0; i--) {
        ins = func(ins, arr[i], i, arr)
    }
    return ins
}

function reduce(arr ,func,curr=arr[0]){
    if(arr.length<=1){return console.error("error");}
    for (let i = 1; i < arr.length; i++) {
        curr = func(curr,arr[i])
    }
    return curr
}

function reduceRight(arr ,func,curr=arr[arr.length-1]){
    if(arr.length<=1){return console.error("error");}

    for (let i =arr.length-2;i>=0; i--) {
        curr = func(curr,arr[i])
    }
    return curr
}

const sum = reduceRight([3, 10, 26, 0], function (arr,acc) {
   let c=0
    c=arr+acc
    return c
 });
console.log(sum); 