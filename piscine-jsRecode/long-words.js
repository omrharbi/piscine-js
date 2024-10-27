function longWords(arr) {
   return arr.every((c) => {
        return c.length >= 5
    })
}

function oneLongWord(arr){
    return arr.some((c) => {
        return c.length >= 10
    })
}
function noLongWords(arr){
    return arr.every((c) => {
        return c.length <7
    })
}
let c = ["testgz", "gtzrh", "o234056789"]

console.log(noLongWords(c));
