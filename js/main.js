const btn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open')
});

function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!username) {
        alert('Please enter your username.');
        return false;
    }

    // Проверка, что имя содержит только буквы (включая украинские и польские), пробелы и дефисы
    if (!/^[a-zA-Zа-яА-ЯёЁіІїЇґҐєЄłŁżŻśŚćĆńŃóÓ\s\-]+$/.test(username)) {
        alert('Please enter a valid username (letters, spaces, and hyphens only).');
        return false;
    }

    if (!email) {
        alert('Please enter your email.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Thank you for your order! We will contact you soon.');
    return true;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}