function getArchitects() {
    let gettageA = Array.from(document.querySelectorAll("a"))
    let gettageSpan = Array.from(document.querySelectorAll("span"))
    return [gettageA, gettageSpan]
}
function getClassical() {
    let gettageA = Array.from(document.querySelectorAll(".classical"))
    let gettageSpan = Array.from(document.querySelectorAll("a:not(.classical)"))
    return [gettageA, gettageSpan]
}
function getActive() {
    let gettageA = Array.from(document.querySelectorAll(".classical .active"))
    let gettageSpan = Array.from(document.querySelectorAll("a:not(.active)"))
    return [gettageA, gettageSpan]
}
function getBonannoPisano() {
    let gettageA = document.querySelector("#BonannoPisano")
    let gettageSpan = Array.from(document.querySelectorAll("a:not(#BonannoPisano)"))
    return [gettageA, gettageSpan]
}
export {

    getActive,
    getArchitects,
    getBonannoPisano,
    getClassical
}