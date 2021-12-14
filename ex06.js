// Função vai ser um bolean ou number

// Se bolean return inverso da entrada

// Se number return inverso --> 1 return -1

// Se !number ou !bolean return "booleano ou número esperados, mas o parâmetro é do tipo ..."

function inversora(valor) {
    // console.log(valor === Number)
    if (valor > 0 || valor < 0) {
        console.log(valor * (- 1))
    } else if (valor === true || valor === false) {
        console.log(!!valor)
    }
    return valor
}
inversora(6)

