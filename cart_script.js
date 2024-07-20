const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = 0;

cart.forEach(productHTML => {
    const productElement = document.createElement('div');
    productElement.classList.add("cart-space");
    productElement.classList.add('box-content');
    productElement.innerHTML = productHTML;
    cartItemsContainer.appendChild(productElement);
    const productPriceElement = productElement.querySelector('.price');
    if (productPriceElement) {
        const productPrice = parseFloat(productPriceElement.textContent.replace('$', ''));
        totalPrice += productPrice;
    }
});
totalPriceElement.textContent = totalPrice.toFixed(2);