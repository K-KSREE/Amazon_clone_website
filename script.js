let signin = document.querySelector(".nav-sigin ");
let sign = document.querySelector(".foot-panel1 button");
const logout =document.querySelector(".logout");


sign.addEventListener("click",() => {
    window.location.href = "login.html";
});

signin.addEventListener('mouseenter', () => {
    const rect = signin.getBoundingClientRect();
    signinTooltip.style.left = `${rect.left-300}px`;
    signinTooltip.style.top = `${rect.bottom + window.scrollY + 15}px`;
    signinTooltip.style.width = '500px';  
    signinTooltip.style.height = '360px'; 
    signinTooltip.style.display = 'block';
});

document.addEventListener('click', () => {
    if (event.target !== signinTooltip) {
        signinTooltip.style.display = 'none';
    }
});

const shopNowLinks = document.querySelectorAll('.shop-now');
const cartCount = document.getElementById('cart-count');

shopNowLinks.forEach(link => {
    link.addEventListener('click', (event) => {
    event.preventDefault();  
    let currentCount = parseInt(cartCount.textContent, 10);
    cartCount.textContent = currentCount + 1;
    });
});

let btn = document.querySelector(".signin button");
btn.addEventListener('click', () => {
    window.location.href = "login.html";
});

logout.addEventListener("click",() => {
    window.location.href = "login.html";
});

const cartIcon = document.getElementById('cart-icon');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    cartCount.textContent = cart.length;
}

shopNowLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const productBox = link.closest('.box-content').outerHTML;
        cart.push(productBox);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    });
});

cartIcon.addEventListener('click', () => {
    window.location.href = 'cart.html';
});
updateCartCount();