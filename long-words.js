function longWords(arr) {
    let length = arr.every((c) => c.length >= 5)
    return length
}

function oneLongWord(arr) {
   return arr.some(l => l.length >= 10)
}

function noLongWords(arr) {
    let length = arr.every((c) => c.length < 7)
    return length
 }
 