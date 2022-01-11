// Função retorna o segundo numero maior de um array

function segundoMaiorDoArray(arr) {
    let maior = 0 
    let menor = 0
    let segundoMaior = 0

    for (let i = 0; i < arr.length; i++) {
        arr[i] > maior ? maior = arr[i] : 0
        arr[i] < i ? menor = arr[i] : 0
    }
    console.log(maior)
}
segundoMaiorDoArray([12, 28, 9, 44])