// Função que indentifica palavras semelhantes

// Função param palavra, param array de string

// A função deve filtrar as palvras do array que contem a string do primeiro param

function filtarIguais(palavra, array) {
    const filtro = array.filter((element) => {
        if (element === palavra) {
            const resultado = []
            resultado.push(element, palavra)
            console.log(resultado)
        }
    })
    return filtro
}
filtarIguais("bom", ["ruim", "melhor", "mais"])
filtarIguais("bom", ["ruim", "melhor", "mais", "bom"])