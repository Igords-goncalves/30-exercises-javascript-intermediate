// Função recebe 2 parâmteros

// O primeiro parametro é o elemento irá repetir

// O segundo é numero de vezes que haverá a repetição

// Return um array ---> //!push()

function repetidora(valor, repetidor) {
    const array = []
    for (let i = 0; i < repetidor; i++) {
        array.push(valor)
    }
    console.log(array)
}
repetidora(3, 10)
repetidora('Igor', 3)