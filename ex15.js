//// Função recebe um array de numeros

// Retorna todos os pares que tenham indices pares

// par é quando numero % 2 == 0

function allPairs(array) {
    const onlyPairs = array.filter((e, i) => {
        if (i >= 0 && 
            i % 2 == 0 && 
            e % 2 == 0)
            return e
    })
    // Extraindo os elementos de dentro do array com seu indíce

    for (let index = 0; index < onlyPairs.length; index++) {
        console.log(`${index} = ${onlyPairs[index]}`)
    }
    // console.log(onlyPairs) // Aqui só um novo array com o resultado de filter é criado
}
allPairs([2,4,5,8,21,44])
allPairs([2,5,-4,3,24,44])
allPairs([5,21,3,5])