
function filterEntries(a, b) {
    let obj = {}
    Object.entries(a).forEach(([key, val]) => {
        if (b([key, val])) {
            obj[key] = val
        }
    })
    return obj
}
function mapEntries(a, b) {
    let arr = {}
    Object.entries(a).forEach(([key, val]) => {
        let n=b([key, val])||''
         arr[n[0]]=n[1]
    })
    return arr 
}

function reduceEntries(a, b, c = '') {
    let obj = c
    Object.entries(a).forEach(([key, val]) => {
        obj = b(obj, [key, val])
    })
    return obj
}

function totalCalories(obj) {
    return +reduceEntries(obj, (acc, [key, val]) => acc +nutritionDB[key].calories * (val / 100), 0).toFixed(1)
}
function lowCarbs(obj){
    return filterEntries(obj,([key,val])=>nutritionDB[key].carbs * (val / 100)<50)
}

function cartTotal(obj) {
    return mapEntries(obj, ([key, val]) =>  [
        key,
        {calories: +((nutritionDB[key].calories*(val/100)).toFixed(3)),
        protein: +((nutritionDB[key].protein*(val/100)).toFixed(3)),
        carbs: +((nutritionDB[key].carbs*(val/100)).toFixed(3)),
        sugar: +((nutritionDB[key].sugar*(val/100)).toFixed(3)),
        fiber: +((nutritionDB[key].fiber*(val/100)).toFixed(3)),
        fat: +((nutritionDB[key].fat*(val/100)).toFixed(3)),},
    ]
    )
}

