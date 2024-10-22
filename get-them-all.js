
function getArchitects() {
    let tagA = Array.from(document.getElementsByTagName('a'))
    let tagsapn = Array.from(document.getElementsByTagName('span'))
    return [tagA, tagsapn]
}

function getClassical() {
    let classical = Array.from(document.querySelectorAll('a.classical'))
    let notclassical = Array.from(document.querySelectorAll('a:not(.classical)'))
    return [classical, notclassical]
}

function getActive() {
    let activ = Array.from(document.querySelectorAll('a.active'))
    let notActive = Array.from(document.querySelectorAll('a:not(.active)'))
    return [activ, notActive]
}
function getBonannoPisano() {
    let activ = document.querySelector('#BonannoPisano')
    let notActive = Array.from(document.querySelectorAll('.classical.active:not(#BonannoPisano)'));
     return [activ, notActive]
}
export {
    getActive,
    getClassical,
    getBonannoPisano,
    getArchitects
}