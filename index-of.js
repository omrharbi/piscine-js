function indexOf(arr,v,opt=0){
   let index =opt
    for(let i=opt;i<arr.length;i++){

        if (arr[i]===v){
            return index
        } 
        index++
    }
    return -1
}

function lastIndexOf(arr,v,opt=arr.length-1){
    let index =opt
    for(let i=opt;i>=0;i--){
        if (arr[i]===v){
            return index
        } 
        index--
    }
    return -1
}
function includes(arr,v,opt=0){
      for(let i=opt;i<arr.length;i++){
 
         if (arr[i]===v){
             return true
         } 
      }
     return false
 }