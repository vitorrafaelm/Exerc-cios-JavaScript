var ElementUl = document.getElementById('element'); 
var inputElement = document.getElementById('inp');
var buttonElement = document.getElementById('but'); 

var nomes = ["Diego", "Gabriel", "Lucas"]; 

function createList(){

    ElementUl.innerHTML = ""; 

    for(nome of nomes){
        var List = document.createElement('li'); 
        var namePerson = document.createTextNode(nome); 

        List.appendChild(namePerson); 
        ElementUl.appendChild(List); 

    }

}

createList();

function adicionar(){

    

    var input = inputElement.value;
    nomes.push(input); 

    inputElement.value = '';

    createList();
}

