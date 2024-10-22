function adder(arr,pa=0){
    return  arr.reduce(function(acc,curr){
     return   acc+curr
    },pa)
}
function sumOrMul(arr,pa=0){
    if(arr[0]%2==0&& pa==0){
        pa=1
    }
    return arr.reduce(function(acc,curr){
        let c=1
        if(curr%2===0){
            c=curr*acc
        }else{
            c= curr+acc
        }
        return c
    },pa)
} 
function funcExec(arr,n){
    return arr.reduce((priv, funcname)=>{
        return funcname(priv)
    },n)
} 
