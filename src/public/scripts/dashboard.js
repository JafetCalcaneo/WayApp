import '../styles/bootstrap/bootstrap.min.css';
import '../styles/dashboard.css';
import '../img/soyadmin.jpg';

const title = document.querySelector('.navbar-brand');
const username = sessionStorage.getItem('username');
const img = document.querySelector('img');
const body = document.querySelector('body');
const btn = document.querySelector('#btn');

title.textContent +=` ${username}!`;
img.title = img.alt;
//Audio
var link = document.getElementById("audio");
//  Definimos el evento que escucha
const soyAdminAudio = function(e) {
    e.preventDefault();
    var audio = document.createElement("audio");
    audio.src = "Soyadmin.mp3";
    audio.autoplay = "true";
    document.body.appendChild(audio);
};
//  Agregamos el evento al elemento
link.addEventListener("click", soyAdminAudio);

//Suscribirse
btn.addEventListener('click', () =>{
    fetch('http://localhost:4000/api/subs/subscribe', {
        method: 'POST',
        body: JSON.stringify({
            'id': sessionStorage.getItem('id')
        }),
        headers: { 'Content-type': 'application/json' },
    })
    .then(res => res.json())
    .then( (res) =>{
        sessionStorage.setItem('subs', res.subs);
        window.location.href = 'index.html';
    })
});