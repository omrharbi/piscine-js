import { styles } from './pimp-my-style.data.js'
let count = 0;
let lenthStyle = styles.length-1;
function pimp() {
    let btn = document.querySelector(".button")
    if (count < styles.length) {
        addClass(btn)
        if(count===styles.length){
            btn.classList.add("unpimp");
            lenthStyle= styles.length
        }
    }
    if (count === styles.length) {
        removeClass(btn)
        if(lenthStyle<0){ 
            btn.classList.remove("unpimp");
            count=0
        }
    }

}

function addClass(btn) {
    btn.classList.add(styles[count]);
    count++;
 }
function removeClass(btn) {
    btn.classList.remove(styles[lenthStyle]);
     lenthStyle--
}
export {
    pimp
}