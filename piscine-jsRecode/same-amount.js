function sameAmount(str,rg1,rg2){
    let regex1=RegExp(rg1,'g')
    let regex2=RegExp(rg2,'g')
    let match1=str.match(regex1)
    let match2=str.match(regex2)
    if(match1!=null&& match2!=null &&(match1.length===match2.length)){
        return true
    }
    return false
}