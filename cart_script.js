// const cartItemsContainer = document.querySelectorAll('#cart-items');
//     const totalPriceElement = document.getElementById('total-price');

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     // let totalPrice = 0;

//     cart.forEach(productHTML => {
//         const productElement = document.createElement('div');
//         productElement.classList.add('box-content');
//         productElement.innerHTML = productHTML;
//         cartItemsContainer.appendChild(productElement);

//         // Assuming the price is stored within an element with the class "price" in the product HTML
//         const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));
//         totalPrice += productPrice;
//     });

//     totalPriceElement.textContent = totalPrice.toFixed(0);


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

        // Assuming the price is stored within an element with the class "price" in the product HTML
        const productPriceElement = productElement.querySelector('.price');
        if (productPriceElement) {
            const productPrice = parseFloat(productPriceElement.textContent.replace('$', ''));
            totalPrice += productPrice;
        }
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);