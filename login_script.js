const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailMsg = document.getElementById('emailMsg');
const passwordMsg = document.getElementById('passwordMsg');
const forgot = document.querySelector(".forgot");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    let users = localStorage.getItem('users');
    users = users ? JSON.parse(users) : [];

    const user = users.find(user => user.email === email);

    if (!user) {
        emailMsg.classList.remove('hidden');
        passwordMsg.classList.add('hidden');
    } else if (user.password !== password) {
        passwordMsg.classList.remove('hidden');
        emailMsg.classList.add('hidden');
        forgot.classList.remove("hidden");
    } else {
        emailMsg.classList.add('hidden');
        passwordMsg.classList.add('hidden');
        alert('Login successful!');
        window.location.href = 'index.html'; 
    }
});