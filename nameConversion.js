var convert = document.getElementById('convert-btn');
var input = document.getElementById('text');
convert.addEventListener('click',convertFunc);
var current = 0;
var h1element = document.querySelectorAll('h1');
var para = document.querySelectorAll('p');
for(var i = 0; i< h1element.length;i++){
    h1element[i].style.display = 'inline';
    para[i].style.display = 'inline';

}
function convertFunc(){
    document.getElementById('camel-case').innerText = input.value;
    document.getElementById('camel-case').innerText = document.getElementById('camel-case').innerText.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    { 
        return index == 0 ?  word.toLowerCase() : word.toUpperCase() ;
    }).replace(/\s+/g, "");
    


    document.getElementById('pascal-case').innerText = input.value;
    document.getElementById('pascal-case').innerText = document.getElementById('pascal-case').innerText.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    { return    word.toUpperCase();
    }).replace(/\s+/g, "");



    document.getElementById('snake-case').innerText = input.value;
    document.getElementById('snake-case').innerText = document.getElementById('snake-case').innerText.toLowerCase().replace(/\s+/g, "_");

    document.getElementById('screaming-snake-case').innerText = input.value;
    document.getElementById('screaming-snake-case').innerText = document.getElementById('screaming-snake-case').innerText.toUpperCase().replace(/\s+/g, "_");

    document.getElementById('kebab-case').innerText = input.value;
    document.getElementById('kebab-case').innerText = document.getElementById('kebab-case').innerText.toLowerCase().replace(/\s+/g, "-");

    document.getElementById('screaming-kebab-case').innerText = input.value;
    document.getElementById('screaming-kebab-case').innerText = document.getElementById('screaming-kebab-case').innerText.toUpperCase().replace(/\s+/g, "-");

}

