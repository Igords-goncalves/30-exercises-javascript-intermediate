function ola(nome, saudacao) {
    return `${saudacao}, ${nome}!`
}

console.log(ola('Igor', 'Bom dia'))

// TEACHER WAY

function saudacao(nome) {
    const cumprimentar = 'Ola'
    // return [cumprimentar, nome].join(', ').concat("!")
    return [cumprimentar, nome].join(', ') + "!"
}
console.log(saudacao('Igor'))
