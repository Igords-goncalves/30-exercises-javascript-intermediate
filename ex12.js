// Objetos

// Função recebe um objeto como parametro

// E como segundo parametro o nome de uma propriedade contida nesse objeto

// Retornar uma cópia desse objeto sem a propriedade do segundo parametro independete da posição no objeto

/*
 * removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}

 * removerPropriedade({
 * id: 20,
 * nome: "caneta",
 * descricao: "Não preenchido"
 * }, "descricao") // retornará {id: 20, nome: "caneta"}
*/

function removerPropriedade(objeto, propriedade) {
    const novoObjeto = Object.assign(objeto)
    delete novoObjeto[propriedade]
    return novoObjeto
}
console.log(
    removerPropriedade({
        nome: 'Jeff', 
        idade: 18, 
        cpf: 12345678910
    }, "cpf"))