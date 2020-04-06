var idade = 19; 

function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(idade > 18){
                resolve('Você é maior de 18 anos');
            }else {
                reject('Você não é maior que 18 anos'); 
            }
        }, 2000); 
    })
            
}


checaIdade(idade)
    .then(function(response){
        console.log(response); 
    })
    .catch(function(error){
        console.warn(error); 
});
