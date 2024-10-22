 function firstDayWeek(week, year) {
    let date = new Date(year, 0, 1);
    date.setFullYear(year);
    let diffToMonday = (date.getDay() === 0 ? 6 : date.getDay() - 1);
    date.setDate(date.getDate()-diffToMonday)
    let weeks=new Date(date)
    weeks.setDate(weeks.getDate() + 7 * (week - 1));
    if (weeks.getFullYear() < year) {
        return '01-01-' + year;
    }
    return weeks.getDate().toString().padStart(2, '0') + '-' + 
            (weeks.getMonth() + 1).toString().padStart(2, '0') + '-' + 
             weeks.getFullYear().toString().padStart(4, '0');
}
