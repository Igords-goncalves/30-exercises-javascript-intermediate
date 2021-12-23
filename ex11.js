//// Função recebe um array

//// Retorna o primeiro e o ultimo elemento desse array em um novo array

function firsLast(array) {
    const primeiro = array[0]
    const ultimo = array[array.length - 1]
    const newArray = []
    newArray.push(primeiro, ultimo)
    console.log(newArray)
}
firsLast([1,2,3,4])
firsLast([50,2,3,4,35,55,78,20])

// Solução do professor

function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento= elementos.shift() // Remove o primeiro elemento
    const ultimoElemento = elementos.pop() // Remove o ultimo elemento
    return [primeiroElemento, ultimoElemento] 
    }
console.log(receberPrimeiroEUltimoElemento(["a",3,5,"b",49,92]))