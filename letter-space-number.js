function letterSpaceNumber(str){
    var regex=/[a-z] \d((?=\W)|$)/g
    if (str.match(regex)===null){
        return []
    }
    return str.match(regex)
}