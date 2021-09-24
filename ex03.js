// O retorno da função deve ser a string "Salário igual a:
// R$ X", em que X é o quanto o funcionário ganhou no mês.

function salario(horas, diaHora) {
    const total = horas * diaHora
    return `Salario igual a R$${total}`
}

console.log(salario(120, 50)) //Considere as horas mensais

