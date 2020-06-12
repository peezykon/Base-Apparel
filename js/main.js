const form = document.getElementById('form');
form.addEventListener("submit", e => {
    var email = document.getElementById('email').value;
    var pattern = /^[A-Za-z._]{3,}@[A-Za-z{3,}[.]{1}[A-Za-z.]{2,6}$/;

    if (pattern.test(email.value)) {

    } else {
        document.querySelector('.form-control').classList.add('error')
    }
})