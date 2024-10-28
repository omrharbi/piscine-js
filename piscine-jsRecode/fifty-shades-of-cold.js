import { colors } from './fifty-shades-of-cold.data.js'

function generateClasses() {
    let style = document.createElement("style")
    for (let index = 0; index < colors.length; index++) {
        style.textContent += ` .${colors[index]} { background : ${colors[index]}}`
    }
    document.head.appendChild(style)
}

function generateColdShades() {
    let color = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]
    for (let index = 0; index < colors.length; index++) {
        color.map((c) => {
            if (colors[index].includes(c)) {
                let div = document.createElement("div")
                div.className = colors[index]
                div.textContent = colors[index]
                document.body.appendChild(div)
            }
        })
    }
}
function choseShade(d) {
    let div = Array.from(document.querySelectorAll("div"))

    for (let index = 0; index < div.length; index++) {
        div[index].style.background = d
    }
}
export {
    generateClasses, generateColdShades, choseShade
}