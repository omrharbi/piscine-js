function slice(str, s=0, op = null) {
     let newstr = []
     let c=s
     if (s<0){
        s+=str.length
    }else if (op<0){
        op+=str.length
    }
    if (op!==null ){
         for (let i = s; i < str.length; i++) {
            newstr.push(str[i])
            c++
            if (c===op){
                break
            }
        }
    }
    if (op===null){
        
        for (let i = s; i < str.length; i++) {
            newstr.push(str[i])
        }
    }
    if (typeof(str)==='string'){
        return newstr.join('')
    }
    return newstr
}