// Regra de negócio baseada no num1

function numberVerifier(num1, num2) { 
    if (num1 > num2) {
        return true
    } else if (num1 < num2) {
        return false
    } else {
        return 'Os numeros são iguais'
    }
}
console.log(numberVerifier(10, 18))
console.log(numberVerifier(10, 1))