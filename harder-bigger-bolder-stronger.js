
function generateLetters(divs) {
    for (let i = 0; i < 120; i++) {
        let divs = document.createElement("div")
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];
        divs.textContent += randomLetter
        divs.style.fontSize = 11 + i + "px"
        if (i < 40) {
            divs.style.fontWeight = 300 
        }else if(i<80){
            divs.style.fontWeight = 400 
        }else{
            divs.style.fontWeight = 600 
        }
        document.body.appendChild(divs);
    }
}

export {
    generateLetters
}