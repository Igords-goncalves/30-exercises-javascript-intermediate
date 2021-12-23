// Função que recebe 2 inteiros

// Realizar multiplicação sem usar o simbolo de multiplicação

function quaseMultiplicacao(valor1, valor2) {
    let resultado = 0
    for (let i = 1; i <= valor1; i++) {
        resultado += valor2
    }
    console.log(resultado);
}

quaseMultiplicacao(2, 4)
quaseMultiplicacao(3, 6)