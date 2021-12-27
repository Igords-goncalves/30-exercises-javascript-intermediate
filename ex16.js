// Bissexto ou não

// É multiplo, não pode ser multiplo de 100 a não ser que seja multiplo de 400

// ano % 4 == 0 && ano % 100 != 0 || ano % 400 = 0

function isBissexto(ano) {
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        console.log(`${ano} é um ano bissexto`)
    } else {
        console.log(`${ano} não é bissexto`)
    }
}
isBissexto(2014)
isBissexto(1988)
isBissexto(2021)
isBissexto(2020)