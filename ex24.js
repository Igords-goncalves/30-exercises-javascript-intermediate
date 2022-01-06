// Quantas vezes o caracter aparece na string

function verificadorDeRepeticao(char, string) {
    let resultado = 0
    const array = string.split('')
    for (let i = 0; i < array.length; i++) {
        if (array[i] === char) {
            resultado = resultado + array[i].length
        }
    }
    console.log(resultado)
}
verificadorDeRepeticao('a', 'bAnanadAs')
verificadorDeRepeticao('A', 'bAnanadas')

// Teacher Way

function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
    }
console.log(contarCaractere('a', 'Bananas assadas são legais'))