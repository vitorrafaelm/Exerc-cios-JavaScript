var ElementButton = document.getElementById('new'); 
var newContainer = document.getElementById('element'); 


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }



function addElement(){
    var box = document.createElement('div'); 

    box.setAttribute("class", "box"); 

    box.style.backgroundColor = 'red';
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.display = 'inline-block';
    box.style.marginLeft = '10px';
    box.style.marginTop = '10px';

    box.onmouseover = function(){
        box.style.backgroundColor = getRandomColor(); 
    }

    newContainer.appendChild(box);

   
}

ElementButton.onclick = addElement; 
