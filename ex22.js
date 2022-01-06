// Função recebe parametro numero de 1 a 10

// Internamente, na função, será gerado um número aleatório de 1 a 10.

// A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente, são coisas separadas

// Adivinhe o numero sorteado

function numeros(num, min = 1, max = 10) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const sorteio = Math.floor(Math.random() * (max -min) + min)
    const verificacao = () => {
        if (num === sorteio) {
            return `Parabéns o número soretado foi ${sorteio}`
        } else {
            return `Que pena o numero sorteado foi ${sorteio}`
        }
    }
    return verificacao()
}

console.log(numeros(5))