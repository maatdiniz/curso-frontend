btnCalcular = document.getElementById('calcular')
function calculadora(){
    let numero1 = Number(document.getElementById('valor1'))
    let numero2 = Number(document.getElementById('valor2'))
    let opcao = document.getElementById('operacao')

    switch(opcao){
        case 'soma':
            resposta = numero1 + numero2;
            break;
        case 'subtracao':
            resposta = numero1 - numero2;
            break;
        case 'multiplicacao':
            resposta = numero1 * numero2;
            break;
        case 'divisao':
            resposta = numero1 / numero2;
            break;
        case 'resto':
            resposta = numero1 % numero2;
            break;
    }
}