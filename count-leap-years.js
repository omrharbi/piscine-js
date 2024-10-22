function countLeapYears(Year) {
    let c = 0
    let date = new Date(Year)
    let getyear = date.getFullYear()
    for (let i = 1; i < getyear; i++) {
        if ((i % 4 == 0 && i % 100 != 0 )||(i % 400 == 0)) {
            c++
        }
    }
    return c
}