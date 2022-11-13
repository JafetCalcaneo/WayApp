import '../styles/login.css'
import '../img/jalowin.jpg'
const user = document.querySelector('.user');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const btn = document.querySelector('.clase-boton');
const iniciales = document.querySelector('.icono-iniciales2');

btn.addEventListener('click', (e) => {
    if(user.value == ""){return alert('El username esta vacio')};
    if(email.value == ""){return alert('El email esta vacio')};
    if(password.value == ""){return alert('La contraseña esta vacia')};

 sendData(user.value, email.value, password.value )
    
});

const sendData =  (user, email, password) => {
    fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
            'username': user,
            'email': email,
            'password': password
        }),
        headers: {'Content-type' : 'application/json' },
        
    })
    .then(res => res.json())
    .then(function(res)  {
        console.log(res);
     fetch('http://localhost:4000/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                'email': email,
                'password': password
            }),
            headers: {'Content-type' : 'application/json', 'x-access-token': res},
            
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res, 'Ultimo fetch');

        })
    }
        
    )
    .catch(error => console.log(error))

}

window.onload = () => {
    const form = document.querySelector('.form')
    form.onsubmit = (e) => {
      e.preventDefault();
    }
  }
