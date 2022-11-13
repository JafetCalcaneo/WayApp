import '../styles/login.css';
import '../img/jalowin.jpg'
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const btn = document.querySelector('.clase-boton');

btn.addEventListener('click', (e) => {
    if (email.value == "") { return alert('El email esta vacío') };
    if (password.value == "") { return alert('La contraseña esta vacía') };

    sendData(email.value, password.value)

});

const sendData = (email, password) => {
    fetch('http://localhost:4000/api/auth/signin', {
        method: 'POST',
        body: JSON.stringify({
            'email': email,
            'password': password
        }),
        headers: { 'Content-type': 'application/json' },

    }).then(res => res.json())
        .then(function (res) {
            console.log(res)
            fetch('http://localhost:4000/api/auth/signin', {
                method: 'POST',
                body: JSON.stringify({
                    'email': email,
                    'password': password
                }),
                headers: { 'Content-type': 'application/json', 'x-access-token': res },

            }).then(res => res.json())
                .then(function (res) {
                    
                    fetch('http://localhost:4000/api/auth/signintoken', {
                        method: 'POST',
                        body: JSON.stringify({
                            'email': email,
                            'password': password
                        }),
                        headers: { 'Content-type': 'application/json', 'x-access-token': res.token },
                    })
                        .then(res => res.json())
                        .then(function (res) {
                            console.log(res);
                            sessionStorage.setItem('username', res.user.username);
                            sessionStorage.setItem('role', res.user.roles);
                            sessionStorage.setItem('id', res.user._id);
                            if(res.user.roles == '636825fe5547da94e4602e10'){
                                window.location.href= 'dashboard.html';

                            }else if (res.user.roles == '636825fe5547da94e4602e0f'){

                            }else{
                                window.location.href= 'index_cliente.html';
                            }
                            getData();
                            
                        })
                })
        }

        )
        .catch(error => console.log(error))

}

const getData = () => {

    console.log(sessionStorage.getItem('username'), 'getData');

}

window.onload = () => {
    const form = document.querySelector('.form')
    form.onsubmit = (e) => {
        e.preventDefault();
    }
}
