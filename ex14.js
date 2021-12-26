// Função recebe um objeto como param e retorna umarray de array

// Cada elemento chave e valor se transforma em um array de um array geral

function objArray(obj) {
    console.log((Object.entries(obj)))
}
objArray({
    name: 'Luan',
    age: 18,
    ocupation: 'php developer',
    salary: 599.99
})

objArray({
    name: 'Ana',
    age: 21,
    ocupation: 'javascript developer',
    salary: 1999.99
})