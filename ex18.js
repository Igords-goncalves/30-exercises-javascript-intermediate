// Função recebe um array de produtos

// Retorna a soma de todas as despesas, ou seja, a soma de todos os precos

function despesasTotais(array, total = 0) {
    array.forEach(element => {
        const getPreco = element.preco
        total += getPreco
    })
    console.log(total)
}
despesasTotais([{
    nome: 'Celular',
    categoria: 'Eletronicos',
    preco: 649.99
}, {
    nome: 'Maquina Fotografica',
    categoria: 'Eletronicos',
    preco: 1999.99 
}])

despesasTotais([{
    nome: 'Fone',
    categoria: 'Papelaria',
    preco: 6.99
}, {
    nome: 'Caneta',
    categoria: 'Papelaria',
    preco: 2.99
}])


// Solução do professor

// function despesasTotaiss(itens) {
//     return itens
//     .map(item => item.preco)
//     .reduce((acumulador, valorAtual) => acumulador + valorAtual)
//     }