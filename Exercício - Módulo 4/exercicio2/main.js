var usuario = document.getElementById('usuario'); 
var button = document.getElementById('buton'); 
var ul = document.getElementById('rep'); 




function buscarRep(){
    ul.innerHTML = '';
    var usuarioGit = usuario.value;
    var url = "https://api.github.com/users/"+usuarioGit+"/repos"; 

    renderLoading();

    axios.get(url)
    .then(function(response){
        var arrayT = response.data.length;
        ul.innerHTML = '';
        for(var i = 0; i <= arrayT; i++){
            var ElementLi = document.createElement('li'); 
            var textLi = document.createTextNode(response.data[i].name); 

            ElementLi.appendChild(textLi); 
            ul.appendChild(ElementLi);
            usuario.value = ''; 
        }
        
    })
    .catch(error => {
        console.log(error); 
    });
}

function renderLoading(loading) {
    ul.innerHTML = "";
    var text = document.createTextNode("Carregando...");
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(text);
    ul.appendChild(loadingElement);
  }
 
button.onclick = buscarRep; 

