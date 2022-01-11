// Função retorna o segundo numero maior de um array

function segundoMaiorDoArray(arr) {
    let maior = 0
    let segundoMaior

    for (let i = 0; i < arr.length; i++) {
        arr[i] > maior ? maior = arr[i] : 0

        arr.splice(i, 1)
        segundoMaior = arr[0]
    
        arr.forEach(element => {
            if(element > segundoMaior)
            segundoMaior = element
        })
    }
    console.log(maior)
    console.log(segundoMaior)
}
segundoMaiorDoArray([12, 28, 42, 10, 9, 44, 2])