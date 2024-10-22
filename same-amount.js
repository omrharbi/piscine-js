function sameAmount(s,ar2,ar3){
    let r1=new RegExp(ar2,'g')
    let r2=new RegExp(ar3,'g')
    let m1=s.match(r1)
    let m2=s.match(r2)
   if(m1!==null&&m2!==null && (m1.length===m2.length)){
    return true
   }
   return false
}