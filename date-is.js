function isValid(date){
    if(date===''){
        return false
    }
   if(isNaN(date)){
    return false
   }
    return true
}
function isAfter(dateafter, dateToCompare){
     if(dateafter>dateToCompare){
        return true
    }else{
        return false
    }
}
function isBefore(dateBefore, dateToCompare){
    if(dateBefore<dateToCompare){
       return true
   }else{
       return false
   }
}

function isFuture(datefuture){
    if(isValid(datefuture)&& isAfter(datefuture,new Date(Date.now()))){
       return true
   }else{
       return false
   }
}
function isPast(datepast){
    if(isValid(datepast)&& isBefore(datepast,new Date(Date.now()))){
        return true
    }else{
        return false
    }
}