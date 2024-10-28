let lasdiv = null
let isdon = null
function createCircle() {
    document.body.addEventListener("click", (e) => {
        let circle = document.createElement('div')
        circle.classList = "circle"
        circle.style.left = `${e.pageX - 25}px`
        circle.style.top = `${e.pageY - 25}px`
        console.log(e.screenX);

        circle.style.background = "white"

        document.body.appendChild(circle)
        isdon = false
        lasdiv = circle
    })
}
function moveCircle() {
    let box = document.querySelector(".box")
    document.addEventListener('mousemove', (e) => {
        let boxisdon = box.getBoundingClientRect()
        let x = e.clientX - 25
        let y = e.clientY - 25
        if (isdon) {
            x = Math.max(boxisdon.left + 1, Math.min(x, boxisdon.right - 49))
            y = Math.max(boxisdon.top + 1, Math.min(y, boxisdon.bottom - 49))
            lasdiv.style.background="var(--purple)"
        }else{
            if()
        }
        lasdiv.style.left = `${x}px`
        lasdiv.style.top = `${y}px`
    })
}

function setBox() {
    let box = document.createElement('div')
    box.className = 'box'
    document.body.appendChild(box)
}
export {
    createCircle,
    moveCircle, setBox
}