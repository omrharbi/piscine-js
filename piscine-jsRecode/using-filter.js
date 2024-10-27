function filterShortStateName(arr) {
    return arr.filter((c) => {
        if (c.length >= 7) {
            return c
        }
    })
}
function filterStartVowel(arr) {
    let regex = /[aeiou]/g
    let c = arr.filter((c) => {
        if (c[0].toLowerCase().match(regex)) {
            return c
        }
    })
    return c
}
function filter5Vowels(arr) {
    let regex = /[aeiou]/g
    let c = arr.filter((c) => {

        if (c.match(regex).length >= 5) {
            return c
        }
    })
    return c
}
function filter1DistinctVowel(arr) {
    let regex = /[aeiou]/g
    return arr.filter((c) => {
        let set = new Set(c.match(regex)).size === 1
        return set
    })
}

function multiFilter(arr) {
    let regex = /[aeiou]/g
    let r = arr.filter((c) => { 

        if (c.capital.length >= 8 && c.region !== "South" && c.tag.toLowerCase().match(regex).length===1&& regex.test(c.name[0])===false ) {
            return c
        }
    })
    return r
}
let arr = [
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' }
]
console.log(multiFilter(arr));
