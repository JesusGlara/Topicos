

function generarTextoAleatorio(numPalabras) {
    const palabras = ["hiram", "werro", "sapo", "tin", "chuy", "cbum", "tu", "marido", "belcast", "daddy", "fak", "tempo", "bad", "cap", "cup", "compu", "zaza", "party", "copa"]
    let texto = ""
    for (let i = 0; i < numPalabras; i++) {
        const randomIndex = Math.floor(Math.random() * palabras.length)
        texto += palabras[randomIndex] + " "
    }
    return texto.trim(); 
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


for (let i = 0; i < 5; i++) {
    const parrafo = document.createElement('p')
    const numPalabras = getRandomInt(50, 100)
    const texto = generarTextoAleatorio(numPalabras)

    parrafo.textContent = texto
    const caracteres = texto.length
    parrafo.textContent += ` (${caracteres} caracteres)`

    document.body.appendChild(parrafo)
}
