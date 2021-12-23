// Função que recebe 2 inteiros

// Realizar multiplicação sem usar o simbolo de multiplicação

function multiplicacao(valor1, valor2) {
    let resultado = 0
    for (let i = 1; i <= valor1; i++) {
        resultado += valor2
    }
    console.log(resultado);
}

multiplicacao(2, 4)
multiplicacao(3, 6)
multiplicacao(2, 5)