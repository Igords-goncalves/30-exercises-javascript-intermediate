// Função recebe uma string

// retorna a string sem vogais

function soConsoantes(string) {
    const vogais = ['a','e','i','o','u']
    for (let i = 0; i < vogais.length; i++) {
        const troca = string.replace(vogais[i], '')
        string = troca
    }
    console.log(string)
}
soConsoantes("enfaixado")
soConsoantes("fundamentos")

// Teacher Way

function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    return frase
    }
console.log(removerVogais('enfaixado'))