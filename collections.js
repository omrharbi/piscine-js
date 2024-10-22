 function arrToSet(a){
    let set =new Set(a)
    return set
}
function arrToStr(a){
    let concat=""
    for (let i=0;i<a.length;i++){
        concat+=String(a[i])
    }
    return concat
}
function setToArr(a){
    let arr=[...a]
    return arr
}
function setToStr(a){
     let arr=[]
     for (let str of a){
        arr.push(str)
     }
     return arr.join('')
}
function strToArr(str){
    return str.split('')
}
function strToSet(str){

    let arr=new Set()
    for (let s of str){
        arr.add(s)
    }
    return arr
}
function mapToObj(map){
    return Object.fromEntries(map)
}
 function objToArr(obj){
    return Object.keys(obj).map((key)=>obj[key])
 }
 function objToMap(obj){
     const map2 = new Map(Object.entries(obj))
    return map2
 }
 function arrToObj(arr){
    return Object.assign({},arr)
 }
 function strToObj(str){
    return Object.assign({},str)
 }

 function superTypeOf(map){
    if (map===null){
        return 'null'
    }else if (map===undefined){
        return 'undefined'
    }
 return map.constructor.name
 }