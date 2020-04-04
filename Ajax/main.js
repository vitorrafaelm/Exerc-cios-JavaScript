
/*Resolve é uma função usada para quando o resultado for de sucesso
reject quando nao foi de sucesso

var minhaPromise = function (){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest(); 

        //A primeira informação é o método e o segundo a url. 

        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null); 

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4){
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText)); 
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

O then é executado cado a minhaPromise tenha funcionado


minhaPromise()
    .then(function(response){
        console.log(response); 
    })
    .catch(function(error){
        console.warn(error); 
    });



console.log(resultado); 

*/

axios.get('https://api.github.com/users/diego3g')
    .then(function(response){
        console.log(response); 
    })
    .catch(function(error){
        console.warn(error); 
    });
