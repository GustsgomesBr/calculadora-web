var numeroAtual = "";
var numeroAnterior = "";
var num1 = null;
var atuacao = "";

var clickSomar = 0;
var anteriorConsole = document.getElementById('numAnterior')
var calcConsole = document.getElementById('calcConsole')

function atualizarConsole(){
    calcConsole.innerHTML = numeroAtual
    anteriorConsole.innerHTML = numeroAnterior
}

function buttonNumber(num){
    numeroAtual += num
    atualizarConsole()
}

function apagarButton(){
    numeroAtual = numeroAtual.slice(0, -1)
    atualizarConsole()   
}

function somarButton(){
    atuacao = "somar";
    if(num1 === null){
        num1 = parseFloat(numeroAtual)
        numeroAnterior = numeroAtual + "+";
        numeroAtual = "";
        atualizarConsole()
    }
}

function subtrairButton(){
    atuacao = "subtrair";
    if(num1 === null){
        num1 = parseFloat(numeroAtual)
        numeroAnterior = numeroAtual + "-";
        numeroAtual = "";
        atualizarConsole()
    }
}

function multiplicarButton(){
    atuacao = "multiplicar";
    if(num1 === null){
        num1 = parseFloat(numeroAtual)
        numeroAnterior = numeroAtual + "*";
        numeroAtual = "";
        atualizarConsole()
    }
}

function divisaoButton(){
    atuacao = "divisao";
    if(num1 === null){
        num1 = parseFloat(numeroAtual)
        numeroAnterior = numeroAtual + "/";
        numeroAtual = "";
        atualizarConsole()
    }
}

function criarResultado(){
    var result;
    numeroAnterior = ""
    if(atuacao === "somar"){
        result = num1 + parseFloat(numeroAtual);
        numeroAtual = result.toString();
        atualizarConsole();
        num1 = null;
        atuacao = ""
    }
    if(atuacao === "subtrair"){
        result = num1 - parseFloat(numeroAtual);
        numeroAtual = result.toString();
        atualizarConsole();
        num1 = null;
        atuacao = ""
    }
    if(atuacao ==="multiplicar"){
            result = num1 * parseFloat(numeroAtual);
            numeroAtual = result.toString();
            atualizarConsole();
            num1 = null;
            atuacao = ""
    }
    if(atuacao ==="divisao"){
        result = num1 / parseFloat(numeroAtual);
        numeroAtual = result.toString();
        atualizarConsole();
        num1 = null;
        atuacao = ""
}


}