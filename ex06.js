//// Função vai ser um bolean ou number

// Se bolean return inverso da entrada

//// Se number return inverso --> 1 return -1

// Se !number ou !bolean return "booleano ou número esperados, mas o parâmetro é do tipo ..."

function inversora(valor) {
    if (valor > 0 || valor < 0) {
        valor  *= (- 1)
    } else if (valor) {
        valor = typeof valor
        return valor
    } else if (!valor) {
        valor = true
    } else {
        valor = 'Valor esperado bolean ou number'
    }
    return valor
}
console.log(inversora(-12))
console.log(inversora(false))
console.log(inversora(true))
console.log(inversora('igor'))