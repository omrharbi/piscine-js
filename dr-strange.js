function addWeek(date){
 
    const day = +String(date.getUTCDate()).padStart(2, '0'); 
    const daysOfWeek = [
         'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday',
    ]; 
     const secondsOfWeek=['secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday','secondSunday']; 

    let dayOfWeek=""
 
    if(day>=1&&day<=6){
        dayOfWeek  = daysOfWeek[day-1];  
    }
    if(day>=7 && day<14){
      dayOfWeek  = secondsOfWeek[(day)-7]; 
    }
    if(day>=14 && day<21){
        dayOfWeek  = daysOfWeek[(day)-14]; 
    }
    if(day>=21 && day<28){
        dayOfWeek  = secondsOfWeek[(day)-21]; 
    }
    if(day>=28 && (day<30 || 31)){
        dayOfWeek  = daysOfWeek[(day)-28]; 
    }else{
        return console.log("no weeks");
    }
    console.log(dayOfWeek);
}

addWeek(new Date('0001-01-32')) 