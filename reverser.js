function reverse(arr){
    let str=[]
    for(let i=arr.length-1;i>=0;i--){
        str.push(arr[i])
    }
    if(typeof(arr)==='string'){
        return str.join('')
    }
    return str
}