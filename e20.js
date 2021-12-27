// Faça uma função que recebe a base e a altura de um triângulo.

// Retorne a área desse triângulo. 

// A precisão deverá ser de duas casas decimais, arredondando se necessário.

// (base * altura) / 2

// Uma boa sugestão é chamar a função areaDoTrigulo dentro de uma que verifica a possibilidade de ser um triângulo 

const areaDoTringulo = (base, altura) => {
    const resultado = (base * altura) / 2
    return Math.floor(resultado.toFixed(2))
}
console.log(areaDoTringulo(3, 10))
console.log(areaDoTringulo(3.33, 7.88))