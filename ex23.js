// Função recebe uma string e conta quantas palavras ela tem

function contarPalavras(text) {
    const textoArray = text.split(" ")
    console.log(textoArray.length)
}

contarPalavras("Hoje eu vou nadar")
contarPalavras("Hoje eu vou nadar na praia de angra dos reis, pois é minha cidade")