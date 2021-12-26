// Função que recebe um array com elementos de tipos diversos

// A função retorna um array somente com os numeros do array passado como param

function onlyNumbers(array) {
    const newArray = array.filter((e) => {
        if (typeof(e) === 'number' && !isNaN(e)) {
            return e
        }
    })
    console.log(newArray)
}
onlyNumbers(["a", "Igor", true, 1, "c", 4, 0, -1])
onlyNumbers(["a", "Igor", true, 4, "c", 8, "9", 10])