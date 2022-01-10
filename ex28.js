// Função recebe 2 params

//  1 array, qtnd de dígitos

// retornar somente aqueles números do array que têm mesma qtnd de digitos

function filtrarArrayPorDigitos(array, digito) {
    let resultado = []

    for (const index of array) {
        const TamString = String(index).length //# Simplificando

        if (TamString === digito)
            resultado.push(index)
    }
    console.log(resultado)
}
filtrarArrayPorDigitos([12, 444, 56, 1, 908, 23], 2)