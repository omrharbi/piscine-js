function dayOfTheYear(year) {
    const oneDay = 24 * 60 * 60 * 1000;
    const years = year.getFullYear() + "-01-01"
    if (year.getUTCMonth() + 1 == 1) {
        return 1
    }
    let firstday = new Date(years)
    const diffDays = Math.round(Math.abs((firstday - year) / oneDay) + 1);
    return diffDays
}
