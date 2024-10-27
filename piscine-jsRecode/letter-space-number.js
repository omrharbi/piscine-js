function letterSpaceNumber(str) {
    let regex = /(\w\s\d)((?=\W)|$)/g
    if (str.match(regex) === null) {
        return []
    } else {
        return str.match(regex)
    }
}
console.log(letterSpaceNumber("It's 20 past 3"));
