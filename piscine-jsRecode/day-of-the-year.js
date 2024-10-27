function dayOfTheYear(year){
    let day=24*60*60*1000
    let years=year.getFullYear()+"-01-01"
    if(year.getUTCMonth()+1==1){
        return 1
    }
    let dayes=new Date(years)
    let dayofyear=Math.round(Math.abs((dayes-year)/day)+1)
    return dayofyear
}

console.log(dayOfTheYear(new Date('1664-08-09')));
