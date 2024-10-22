function matchCron(cro,date){
    let cron=cro.split(" ")
    for(let i=0;i<cron.length;i++){
        if(cron[i]!='*'){
            if(i==0 && cron[i]==date.getMinutes()){
                continue
            } else if(i==1 && cron[i]==date.getHours()){
                continue
            }else if(i==2 && cron[i]==date.getDate()){
                continue
            }else if(i==3 && cron[i]==date.getMonth()+1){
                continue
            }else if(i==4 && cron[i]==date.getDay()){
                continue
            }else{
                return false
            }   
        }
    }
return true
}