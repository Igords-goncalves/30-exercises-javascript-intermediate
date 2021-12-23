// Função recebe um numero como parametro

// E retorna uma string com o simbolo mais na quantidade do parametro

function retornarString(valor, array = []) { // Usando recurso parametro padrão do ES6
    for (let i = 0; i < valor; i++) {
        array.push("+")
    }
    console.log(array.join(" ").toString())
}
retornarString(4)
retornarString(10)