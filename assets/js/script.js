/* Script da página index.html */

/* Script da página indicacoes.html */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '80%'
email.style.width = '80%'

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    let nome = document.querySelector('#nome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        nome.style.border = '3px solid red'
    } else {
        txtNome.innerHTML = ''
        nome.style.border = '3px solid green'
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    let email = document.querySelector('#email')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
        email.style.border = '3px solid red'

    } else {
        txtEmail.innerHTML = ''
        email.style.border = '3px solid green'

    }

}