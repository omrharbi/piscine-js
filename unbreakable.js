function split(str, sp='') {
    let arr = []
    let st = ""
    if(sp===''){
        for (let i=0;i<str.length;i++) {
            arr.push(str[i])
        }
        return arr
    }

    for (let i=0;i<str.length;i++) {
        if(str.substring(i,i+sp.length)===sp){
            arr.push(st)
            st=""
            i+=sp.length-1
       }else{
        st+=str[i]
       }
    }
    if (st != null) {
        arr.push(st)
    }
    return arr
}

function join(arr, sp = null) {
    let str = ""
    let news = ""
    if (sp === null) {
        for (let i = 0; i < arr.length; i++) {
            if (i != arr.length) {
                str += arr[i] + ','
            }
        }
    }
    if (sp != null) {
        for (let i = 0; i < arr.length; i++) {
            str+=arr[i]
            if (i != arr.length-1) {
                str += sp
            }
        }
    }
    return str
}