function firstDayWeek(week, years) {
    let date = new Date(years, 0, 1)
    date.setFullYear(years)
    let monday=date.getDate()===0?6:date.getDate()-1
    date.setDate(date.getDate()-monday)
     let w=new Date(date)
     w.setDate(w.getDate()+7*(week-1))
     
     return w.getDate().toString().padStart(2,'0')
}