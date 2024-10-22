import { colors } from './fifty-shades-of-cold.data.js'

function generateClasses() {
    const styles = document.createElement('style');
    const c = colors.map(color => `.${color} { background:${color}; }`).join('\n');
    styles.textContent = c;
    document.head.appendChild(styles);
}
function checkColor(colors) {
    const containsColor = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];
    return containsColor.some(coldColor => colors.includes(coldColor));
}
function generateColdShades() {
    colors.forEach(color => {
         if (checkColor(color)) {
            console.log(checkColor(color));
            let divs = document.createElement("div")
            divs.setAttribute('class', color)
            divs.textContent = color
            document.body.appendChild(divs)
         }
    });
}
function choseShade(color) {
    let div =document.querySelectorAll("div");
    div.forEach(div => {
        div.style.background = color;  
        div.className = color;  
    });
}
export {
    generateClasses,
    generateColdShades,
    choseShade
}