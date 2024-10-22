function pyramid(tr,num){
    let tri=""
    let t=0
    let c=0
    let sp = " "
    let n = (tr.length*num)-tr.length

    for(let i=0;i<num;i++){
        tri += sp.repeat(n)
        for(let j=0;j<=t;j++){
            tri+=tr
        }
        n-=tr.length
        c++
        t=i+1+c
        if(i!==num-1){
            tri+="\n"
        }
    }   
    return tri
}