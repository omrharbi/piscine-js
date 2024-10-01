let sign=(n)=>n>0?1:n===0?0:-1
let sameSign=(n,n1)=>{
    if(n<0&&n1<0 || n>0&&n1>0 || n===0 && n1===0){
        return true
    }else{
        return false
    }
}