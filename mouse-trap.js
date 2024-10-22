let lastDive=null;
let isdon=null;
function createCircle() {
    let body = document.body
    body.addEventListener('click', (click) => {
        console.log("click", click);
        let circel = document.createElement("div")
        circel.setAttribute("class", 'circle')
        circel.style.left = `${click.clientX - 25}px`;  
        circel.style.top = `${click.clientY - 25}px`;  
        circel.style.background = 'white'
        lastDive = circel
        document.body.appendChild(circel) 
        isdon=false
    })
}

function moveCircle() {
    let box=document.querySelector(".box")
    document.addEventListener('mousemove', (click) => {
        if (lastDive) {
            const boxRect = box.getBoundingClientRect();
            let x = click.clientX - 25;
            let y = click.clientY - 25;
            if (isdon) {
                x = Math.max(boxRect.left + 1, Math.min(x, boxRect.right - 50 - 1));
                y = Math.max(boxRect.top + 1, Math.min(y, boxRect.bottom - 50 - 1));
                 lastDive.style.background = 'var(--purple)';
            } else {
                if (x >= boxRect.left + 1 && x <= boxRect.right - 50 - 1 && y >= boxRect.top + 1 && y <= boxRect.bottom - 50 - 1) {
                    lastDive.style.background = 'var(--purple)';
                    isdon = true;
                } 
            }
            lastDive.style.left = `${x}px`;
            lastDive.style.top = `${y}px`;
        }
    })
}
function setBox() {
    let box = document.createElement("div")
    box.setAttribute('class', "box")
    document.body.append(box)
}

export {
    setBox,
    createCircle,
    moveCircle
}