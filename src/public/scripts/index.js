// import '../styles/bootstrap/bootstrap.min.css'
import '../styles/index.css'
import '../img/monitachina.png'
import '../img/lupa.png'
import '../img/luna.png'
import '../img/mas.png'
import '../img/twitter.png'
import '../img/github.png'
import '../img/youtube.png'
import '../img/facebook.png'
import '../img/epic.png'
import '../img/avion.png'
import '../img/sistema-ventas.png'
import '../img/youtube.png'

const loadSubs = () => {
        fetch('http://localhost:4000/api/subs/loadSubs', {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
        })
        .then(res => res.json())
        .then( (res) =>{
            sessionStorage.setItem('subs', res.subs);

        })

}
loadSubs();
window.onload = () => {
    
    const followers = document.querySelector('#followers');
    let num = sessionStorage.getItem('subs');
    followers.textContent = `${num} followers`;
}
