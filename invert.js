function invert(obj){
    let newobj={}
   Object.entries(obj).forEach(([key,val])=>{
        newobj[val]=key
    })
    return newobj
 }
 