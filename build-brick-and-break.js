function build(brick) {

    for (let i = 1; i <= brick; i++) {
        setTimeout(() => {
            let div = document.createElement('div')
            div.setAttribute('id', "brick-" + i)
            div.textContent = i
            if (i % 3 == 2) {
                div.dataset.foundation = "true"
            }
            document.body.appendChild(div)
        }, i * 100);
    }
}
function repair(...ids) {
    ids.map((id) => {
        let div = document.getElementById(id)
        console.log(id);
        if (div.dataset.foundation === 'true') {
            div.dataset.repaired = "in progress"
        } else {
            div.dataset.repaired = true
        }
    })
}
function destroy() {
    let div = Array.from(document.querySelectorAll("div"))
    div[div.length - 1].remove()
}
export {
    build,
    repair,
    destroy
}