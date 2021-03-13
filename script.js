var numeroAtual = "";

var calcConsole = document.getElementById('calcConsole')

function buttonNumber(num){
    numeroAtual += num
    calcConsole.innerHTML = numeroAtual
}