function triangle(tr,num){
    let tri=""
    let t=0
    for(let i=0;i<num;i++){
        for(let j=0;j<=t;j++){
            tri+=tr
        }
        t=i+1
        if(i!==num-1){
            tri+="\n"
        }
    }   
    return tri
}