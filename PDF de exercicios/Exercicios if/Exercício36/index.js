//Total de vendas 

var totalVendas = document.getElementById('totalVendas');
var totalVendasEmpresa = 0; 

//CÓDIGO CORRETOR 1
var nomeCorretor1 = document.getElementById('nomeCorretor1'); 
var valorVendasCorretor1 = document.getElementById('valorVendasCorretor1'); 
var buttonCorretor1 = document.getElementById('buttonCorretor1'); 

var nomeC1 = document.getElementById('nomeC1');
var vendasC1 = document.getElementById('vendasC1');
var comissaoC1 = document.getElementById('comissaoC1');

var comissaoCorretor1 = 0; 
function calcularComissaoC1(){
    valorVendasCorretor1 = parseFloat(valorVendasCorretor1.value); 

    if(valorVendasCorretor1 > 50000){
        comissaoCorretor1 = valorVendasCorretor1 * (12/100); 
    }else if(valorVendasCorretor1 <= 50000 && valorVendasCorretor1 >= 30000){
        comissaoCorretor1 = valorVendasCorretor1 * (9.5/100); 
    }else {
        comissaoCorretor1 = valorVendasCorretor1 * (7/100); 
    }
    
    var textNome = document.createTextNode(nomeCorretor1.value); 
    nomeC1.appendChild(textNome); 

    var valorVendas = document.createTextNode(valorVendasCorretor1 + " reais."); 
    vendasC1.appendChild(valorVendas);

    var valorComissao = document.createTextNode(comissaoCorretor1 + " reais."); 
    comissaoC1.appendChild(valorComissao);

    totalVendasEmpresa = valorVendasCorretor1; 
    var text = document.createTextNode(totalVendasEmpresa + " reais."); 
    totalVendas.appendChild(text); 
}

//CÓDIGO CORRETOR 2
var nomeCorretor2 = document.getElementById('nomeCorretor2'); 
var valorVendasCorretor2 = document.getElementById('valorVendasCorretor2'); 
var buttonCorretor2 = document.getElementById('buttonCorretor2'); 

var nomeC2 = document.getElementById('nomeC2');
var vendasC2 = document.getElementById('vendasC2');
var comissaoC2 = document.getElementById('comissaoC2');

var comissaoCorretor2 = 0; 
function calcularComissaoC2(){
    valorVendasCorretor2 = parseFloat(valorVendasCorretor2.value); 

    if(valorVendasCorretor2 > 50000){
        comissaoCorretor2 = valorVendasCorretor2 * (12/100); 
    }else if(valorVendasCorretor2 <= 50000 && valorVendasCorretor2 >= 30000){
        comissaoCorretor2 = valorVendasCorretor2 * (9.5/100); 
    }else {
        comissaoCorretor2 = valorVendasCorretor2 * (7/100); 
    }
    
    var textNome = document.createTextNode(nomeCorretor2.value); 
    nomeC2.appendChild(textNome); 

    var valorVendas = document.createTextNode(valorVendasCorretor2 + " reais."); 
    vendasC2.appendChild(valorVendas);

    var valorComissao = document.createTextNode(comissaoCorretor2 + " reais"); 
    comissaoC2.appendChild(valorComissao);

    totalVendas.innerHTML = "";
    totalVendasEmpresa = parseFloat(valorVendasCorretor1) + parseFloat(valorVendasCorretor2); 
    var text = document.createTextNode(totalVendasEmpresa + " reais."); 
    totalVendas.appendChild(text); 

}

//CÓDIGO CORRETOR 3
var nomeCorretor3 = document.getElementById('nomeCorretor3'); 
var valorVendasCorretor3 = document.getElementById('valorVendasCorretor3'); 
var buttonCorretor3 = document.getElementById('buttonCorretor3'); 

var nomeC3 = document.getElementById('nomeC3');
var vendasC3 = document.getElementById('vendasC3');
var comissaoC3 = document.getElementById('comissaoC3'); 

var comissaoCorretor3 = 0; 
function calcularComissaoC3(){
    valorVendasCorretor3 = parseFloat(valorVendasCorretor3.value); 

    if(valorVendasCorretor3 > 50000){
        comissaoCorretor3 = valorVendasCorretor3 * (12/100); 
    }else if(valorVendasCorretor3 <= 50000 && valorVendasCorretor3 >= 30000){
        comissaoCorretor3 = valorVendasCorretor3 * (9.5/100); 
    }else {
        comissaoCorretor3 = valorVendasCorretor3 * (7/100); 
    }
    
    var textNome = document.createTextNode(nomeCorretor3.value); 
    nomeC3.appendChild(textNome); 

    var valorVendas = document.createTextNode(valorVendasCorretor3 + " reais."); 
    vendasC3.appendChild(valorVendas);

    totalVendas.innerHTML = "";
    var valorComissao = document.createTextNode(comissaoCorretor3 + " reais"); 
    comissaoC3.appendChild(valorComissao);

    totalVendas.innerHTML = "";
    totalVendasEmpresa = parseFloat(valorVendasCorretor1) + parseFloat(valorVendasCorretor2) + (valorVendasCorretor3);
    var text = document.createTextNode(totalVendasEmpresa + " reais."); 
    totalVendas.appendChild(text); 
}