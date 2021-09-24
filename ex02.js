function idadeEmDias(idade, anos = 365) {
    const coversao = anos * idade
    return coversao
}

idade = idadeEmDias(20)
idade = idadeEmDias(40)
idade = idadeEmDias(80)

console.log(`A idade em dias é ${idade}`)