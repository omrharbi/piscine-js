function nasa(n){
    let s=""
    for (let i=1;i<=n;i++){
        if(i%3===0&&i%5===0){
            s+="NASA"
        }else  if(i%3===0){
            s+="NA"
           
        }else if(i%5===0){
            s+="SA"
        } else{
            s+=i
        }  
        if(i!=n){
            s+=" "
        }
    }
     return s
}