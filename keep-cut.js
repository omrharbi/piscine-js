function cutFirst(str){
    return str.slice(2)
}
function cutLast(str){
    let n=""
    for(let i=0;i<str.length-2;i++){
        n+=str[i]
    }
    return n
}
function cutFirstLast(str){
    let first=""
    first=str.slice(2)
   let lest=cutLast(first)
    return lest
}
function keepFirst(str){
    
    return str.slice(0,2)
}
function keepLast(str){
    if(str.length<=2){
        return str
    }
    let n=""
    for(let i=str.length-2;i<str.length;i++){
        n+=str[i]
    }
    return n
}
function keepFirstLast(str){
    if(str.length<=4){
        return str
    }else{

        let firs=keepFirst(str)
        let last=keepLast(str)
        return firs+last
    }
}