/*
function whatsThisMonth(number) {
    const months = {
        jan: 1,
        fev: 2,
        mar: 2,
        abr: 4,
        mai: 5,
        jun: 6,
        jul: 7,
        ago: 8,
        set: 9,
        out: 10,
        nov: 11,
        dez: 12
    }
    if(Math.random(number, 12) == number) {

    }
}
*/

// Utilizar uma estrutura Switch seria mais inteligente.

function mes(number) {
    if (number === 0) {
        console.log('Zero não é um mês')
    } else {
        number = Math.floor(Math.random() * 12)
        console.log(number)

        switch (number) {
            case 1:
                console.log('Janeiro')
                break;
            case 2:
                console.log('Fevereiro')
                break;
            case 3:
                console.log('Março')
                break;
            case 4:
                console.log('Abril')
                break;
            case 5:
                console.log('Maio')
                break;
            case 6:
                console.log('Junho')
                break;
            case 7:
                console.log('Julho')
                break;
            case 8:
                console.log('Agosto')
                break;
            case 9:
                console.log('Setembro')
                break;
            case 10:
                console.log('Outubro')
                break;
            case 11:
                console.log('Novembro')
                break;
            case 12:
                console.log('Dezembro')
                break;
            default:
                console.log('Número Invalido')
                break;
        }
    }
}
mes()

// Teacher way

function receberNomeDoMes(numero) {  
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'] 
    return mapeamento[--numero];
}
console.log(receberNomeDoMes(3))
