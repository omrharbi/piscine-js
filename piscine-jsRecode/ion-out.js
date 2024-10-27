function ionOut(str){
    let regex=/(\w+t)(?=ion)/g
    return str.match(regex)
}
console.log(ionOut('action'));
console.log(ionOut('attention, direction'));
