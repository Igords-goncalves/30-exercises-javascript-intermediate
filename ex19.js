// Funcao que recebe um array com numeros

// Retorna a media simples desses numeros

function mediaSimples(array, media = 0) {
    array.forEach(element => {
        media += element / array.length
    })
    console.log(media)
}
mediaSimples([1,2,3,4,5])
mediaSimples([0,10])