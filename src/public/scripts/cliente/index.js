import '../../styles/bootstrap/bootstrap.min.css';
import '../../styles/index-cliente.css';
import '../../img/bolaAmarilla.jpg';

const title = document.querySelector('.navbar-brand');
const username = sessionStorage.getItem('username');
const img = document.querySelector('img');
const btn = document.querySelector('#btn');

title.textContent +=` ${username}!`;
img.title = img.alt;

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