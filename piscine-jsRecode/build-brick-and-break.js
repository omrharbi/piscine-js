function build(count) {
    let c = 1

    for (let index = 1; index <= count; index++) {
        setTimeout(() => {
            let div = document.createElement("div")
            div.setAttribute('id', 'brick-' + c++)
            div.textContent = index
            document.body.appendChild(div)
            if (index % 3 == 2) {
                div.dataset.foundation = "true"
            }
        }, index * 100)
    }

}
function repair(...ids) {
    ids.map((id) => {
        let div = document.getElementById(id)
        if (div.dataset.foundation === "true") {
            div.dataset.repaired = "in progress"
        } else {
            div.dataset.repaired = "true"
        }
    })

}
function destroy() {
    let getdiv = Array.from(document.querySelectorAll("div")) 
        getdiv[getdiv.length-1].remove()
 
}

export {
    build,
    repair,
    destroy
}