document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector('#container-sign');
    let BtnSignIn = document.querySelector('#btn-sign-in');
    let BtnSignUp = document.querySelector('#btn-sign-up');
    let mark = document.querySelector('.mark');

    BtnSignUp.addEventListener('click', function () {
        container.classList.add('active');
        mark.classList.add('active');
    });
    
    BtnSignIn.addEventListener('click', function () {
        container.classList.remove('active');
        mark.classList.remove('active');
    });
}, false);