function generateLetters() {
    let str = "abcdefjhigklmnopqrstuvwxyz"
     for (let i = 0; i < 120; i++) {
        let index = Math.floor(Math.random() * str.length)
        let div = document.createElement("div")
        div.textContent = str[index].toUpperCase()
        div.style.fontSize=11+i+"px"
        if( i<40){
            div.style.fontWeight=300
        }else if(i<80){
            div.style.fontWeight=400
        }else{
            div.style.fontWeight=600

        }
        document.body.appendChild(div)
    }


}
export {
    generateLetters
}