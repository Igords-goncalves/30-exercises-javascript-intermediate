// Função recebe um objeto como parâmetro

// Retorna outro objeto que corresponde ao objeto recebido como parâmetro

// As posições das chaves e valores devem estar invertidas

//%* inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}


function inverter(obj) {

    const array = Object.entries(obj)
    const objIvertido = {}
    console.log(array)

    array.forEach(element => {
        const chave = 0
        const valor = 1

        objIvertido[element[valor]] = element[chave]
    })
    console.log(objIvertido)
}
inverter({a:1, b:2, c:3})