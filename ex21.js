// Função recebe um array de números

// Retorna o menor numero desse array

// function menorNumero(arr) {
//     return Math.min(...arr)
// }
// console.log(menorNumero([2,3,67,8]))

function menorNumeroArray(array) {
    let menor = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < i) {
            menor = array[i]
        }
    }
    console.log(menor)
}
menorNumeroArray([2,5,7,8,9,1,0])