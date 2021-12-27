// Função recebe um array de numeros e executa a soma desses numeros

function somarElementosArray(array) {
    let soma = 0
    for (const key in array) {
        soma = soma + array[key]
    }
    console.log(soma)
}
somarElementosArray([1,2,3,4,10])