function ionOut(str){
    let chk=/(\w+t)(?=ion)/g
     if (str.match(chk)===null){
        return []
     }
    return  str.match(chk)
}