import { styles } from './pimp-my-style.data.js'
let c = 0
let lenght = styles.length
function pimp() {
    let btn = document.querySelector(".button")
    if (c < styles.length) {
        addClass(btn)
        if (c === styles.length) {
            btn.classList.add("unpimp")
            lenght = styles.length
        }
    } else if (c == styles.length) {
        removeClass(btn)
        if (lenght <  0) {
            c = 0
            btn.classList.remove("unpimp")
        }
        console.log(c, styles.length);
    }

    document.body.appendChild(btn)

}
function addClass(btn) {
    btn.classList.add(styles[c])
    c++
}

function removeClass(btn) {
    btn.classList.remove(styles[lenght])
    lenght--
}
export {
    pimp
}