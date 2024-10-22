function filterKeys(a, b) {
    let obj = {}
    Object.entries(a).forEach(([key, val]) => {
        if(b(key)){
            obj[key]=val
        }
    })
    return obj
}

function mapKeys(a,b){
    let obj = {}
    Object.entries(a).forEach(([key,val])=>{
        obj[b(key)] =val
    })
    return obj
}


function reduceKeys(a,b,c=''){
    let obj = c
    Object.entries(a).forEach(([key])=>{
        if(obj===''){
            obj=key
        }else{
            obj=b(obj, key)
        }
      })
  return obj
} 