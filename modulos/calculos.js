function calculadora(valorVenda, condicao){

    valorVenda = Number (valorVenda);
    
    switch(condicao){
        case "1":
            resultado = valorVenda - (valorVenda * (8/100))
            console.log('Será adicionado um desconto de 8%, e vai ser de ' + resultado)
            break
        case "2":
            resultado = valorVenda - (valorVenda * (4/100))
            console.log('Haverá um desconto de 8%, e vai ser de ' + resultado)
            break
        case "3":
            resultado = valorVenda / 2
            console.log('O valor será parcelado em 2x, e vai ser de ' + resultado)
            break
        case "4":
            resultado = (valorVenda + ((valorVenda/100) * 8))
            let parcela = resultado/4
            console.log('Com o parcelamento em 4x será acrescido 8% de juros, com o total ' + resultado + ' \n Cada parcela será de ' + parcela)
            break
        default:
            console.log('Opções: \n Código 1 - À vista, com 8% de desconto \n Código 2 - À vista, com 4% de desconto \n Código 3 - Em 2x, preço normal sem juros \n Código 4 - Em 4x, preço ascrescido de 8%')
            break
    }
    if(resultado != undefined) return resultado
    else return false
}


module.exports = {
    calculadora
}