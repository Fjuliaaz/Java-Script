/***************************************************************
 * Objetivo: Fazer um sistema para ajudar no processo          *
 * de vendas de uma loja.                                      *
 * Autor: Julia Fonseca                                        *
 * Data: 25/08/2023                                            *
 * Versão: 1.0                                                 *
 **************************************************************/

var readline = require('readline');
var calculos = require('./modulos/calculos.js');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o valor: ', function(valorVenda) {
    let conta = valorVenda.replace('.',',')
    let resultado
    entradaDeDados.question('Qual o codigo da venda?: ', function(condicao) {
        let codigo = condicao.replace('.',',')
        
        resultado = calculos.calculadora(conta, condicao);

        if (resultado !== false) console.log(resultado);
        else console.log('Algo não está funcionando \n Tente novamente mais tarde')

        entradaDeDados.close()
    })
})
    