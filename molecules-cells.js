function DNA(rna){
    let c=""
    for(let f of rna){
        if(f==='C'){
            c+="G" 
        }else if(f==='G'){
            c+="C" 
        }else if(f==='A'){
            c+="T" 
        }else if(f==='U'){
            c+="A" 
        }
    }
    return c
}

function RNA(rna){
    let c=""
    for(let f of rna){
        if(f==='C'){
            c+="G" 
        }else if(f==='G'){
            c+="C" 
        }else if(f==='T'){
            c+="A" 
        }else if(f==='A'){
            c+="U" 
        }
    }
    return c
}
console.log(RNA('TAGC'));