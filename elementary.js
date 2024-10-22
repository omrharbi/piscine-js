function multiply(a,b){
    let mul=0
    let x,y
    let sing =false
    if (a<0 || b<0){
        x=Math.abs(a) 
        y=Math.abs(b) 
        for(let i=0;i<y;i++){
            mul+=x
            sing=true
        }
    }else if (a>0&& b>0){
        for(let i=0;i<b;i++){
            mul+=a
        }
    }
    if (b<0&&a<0){
        return mul
    }
    if(sing && a<0|| b<0 ){
        return -mul
    }
    return mul
}

function divide(a,b){
    //let mul=0
    let x,y
    let sing =false
    let c=0
    if (a<0 && b<0){
        x=Math.abs(a) 
        y=Math.abs(b) 
        while(x>1){
            if (x>=y){
                c++
            }
            x-=y
        }
    }else   if (a<0 || b<0){
        x=Math.abs(a) 
        y=Math.abs(b) 
        while(x>1){
            if (x>=y){
                c++
            }
            x-=y
            sing =true
        }
    }
    if((a<0|| b<0) &&sing ){
        return -c
    }
    if (a>0 && b>0){
       while(a>0){
        if (a>=b){
            c++
        }
        a-=b
        }
    }

    return c

} 
function modulo(a,b){
   let div=divide(a,b)
    let m=0
    let sing=false
    for(let i=0;i<b;i++){
        m+=div
    }
    if (a>0&& b>0){
        return a-m
    }else if (a<0 && b>0){
        a=-a
        sing=true
    }else if(a<0&&b<0){
        sing = true
        a = -a
        b = -b
    }
    if (a>0&& b<0){
        b=-b
    }
    let n=0
    if( a>0){
         while(a>0){
            a-=b
            if(b>a){
                n=a
                break
            }
        }
     }
    if ( sing ){
        return -n
    }
    return n
}
