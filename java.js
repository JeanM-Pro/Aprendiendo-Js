const container = document.querySelector('#container');

const texto= document.createElement('p');
texto.classList.add('rojo');
texto.textContent= 'hola soy rojo';

container.appendChild(texto);

const subtitulo= document.createElement('h3');
subtitulo.classList.add('azul');
subtitulo.textContent= 'Soy un h3 azul';

container.appendChild(subtitulo);

//el div

const pink = document.createElement('div');
pink.setAttribute('id', 'divpadre');
pink.classList.add('borde-negro');

container.appendChild(pink);

const contenedordiv = document.querySelector('#divpadre');

const tituloh1 = document.createElement('h1');
tituloh1.textContent= 'Estoy en un div';

contenedordiv.appendChild(tituloh1);

const divparr = document.createElement('p');
divparr.textContent= 'Yo Tambien';

contenedordiv.appendChild(divparr);

//boton 2
const btn = document.querySelector('#btn');
btn.onclick = ()=> alert('hola bebeses JS');

//boton 3

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', ()=>{
    alert('hola bebeses');
});




