var listElement = document.querySelector('#app ul'); 
var inputElement = document.querySelector('#app input'); 
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('List_todos')) || [];

function renderTodos(){

    listElement.innerHTML = '';

    for( todo of todos) {
        var todoElement = document.createElement('li'); 
        var todoText = document.createTextNode(todo); 

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        var linkText = document.createTextNode('Excluir'); 

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText); 
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement); 

    }

    
}

renderTodos(); 

function addTodo(){
    //Pega o valor do input
    var todoText = inputElement.value; 

    //push é uma função que adiciona um item ao final de um array
    todos.push(todoText); 

    //Deixa o input vazio
    inputElement.value = ''; 
    renderTodos(); 
    saveToStorage();
}

//A função addTodo deve ser executada com o click no elemento

buttonElement.onclick = addTodo; 

function deleteTodo(pos){
    todos.splice(pos, 1); 
    renderTodos(); 
}

function saveToStorage(){
    localStorage.setItem('List_todos', JSON.stringify(todos)); 
}