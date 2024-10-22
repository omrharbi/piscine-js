function isFriday(date) {
    let friday = new Date(date)
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[friday.getDay()];
    if (dayName === "Friday") {
        return true
    }
    return false
}
function isWeekend(date){
    let Weekend = new Date(date)
    if (Weekend.getDay() === 6) {
        return true
    }
    return false
}
function isLeapYear(Year){
    let date=new Date(Year)
    let getyear=date.getFullYear()
     if(getyear%4===0 && getyear%100!=0  ){
        return true
    }else if(getyear%400===0){
        return true
    }else{
        return  false
    }
}
function isLastDayOfMonth(month){
    let date=new Date(month)
    let getMonth=date.setDate(date.getDate()+1)
    let s=new Date(getMonth)
    if(s.getDate()===1){
        return true
    }else{
        return false
    }
}