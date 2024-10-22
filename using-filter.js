function filterShortStateName(arr) {
    return arr.filter((w) => w.length < 7)
}

function filterStartVowel(arr) {
    let vowel = new RegExp("[aeiou]", 'g')
    let c = arr.filter((w) => {
        if (w[0].toLowerCase().match(vowel)) {
            return w
        }
    })
    return c
}

function filter5Vowels(arr) {
    let vowel = new RegExp("[aeiou]", 'g')
    let c = arr.filter((w) => {
        if (w.match(vowel).length >= 5) {
            return w
        }
    })
    return c
}
function filter1DistinctVowel(arr) {
    let vowel = new RegExp("[aeiou]", 'g')
    let c = arr.filter((w) => {
        return new Set(w.toLowerCase().match(vowel)).size === 1
    })
    return c
}
function upperCasingStates(arr) {
    let newarr = []
    let space = /\s/g
    arr.map(f => {
        if (space.test(f)) {
            let sp = f.split(' ')
            let newstr = sp.map(f => f[0].toUpperCase() + f.slice(1))
            newarr.push(newstr.join(' '))
        } else {
            newarr.push(f[0].toUpperCase() + f.slice(1))
        }
    })
    return newarr
}
function isVowel(c) {
    return /[aoiue]/i.test(c)
}

function countVowels(s) {
    let n = 0
    for (let c of s) {
        if (isVowel(c)) {
            n++
        }
    }
    return n
}
function multiFilter(obj) {
    let ar = obj.filter((v) => v.capital.length >= 8 &&  !isVowel(v.name[0]) && countVowels(v.tag) >= 1 && v.region !==  "South")
    return ar 
}