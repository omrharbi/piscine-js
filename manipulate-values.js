function filterValues(a, b) {
    let obj = {}
    for (let key in a) {
        if (b(a[key])) {
            obj[key] = a[key]
        }
    }
    return obj
}
function mapValues(a, b) {
    let obj = {}
    Object.entries(a).forEach(([key,val])=>{
        obj[key] =b(val)
    })
    return obj
}

function reduceValues(a,b,c=0){
    let obj = c
    Object.entries(a).forEach(([key,val])=>{
        obj = b(obj,val)
     })
  return obj
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3))
// output: 37