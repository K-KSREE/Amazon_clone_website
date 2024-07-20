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

// const cartIcon = document.getElementById('cart-icon');
//     const cartModal = document.getElementById('cart-modal');
//     const cartItems = document.getElementById('cart-items');
//     const closeCartButton = document.getElementById('close-cart');
//     let cart = [];

//     shopNowLinks.forEach(link => {
//         link.addEventListener('click', (event) => {
//             let currentCount = parseInt(cartCount.textContent, 10);
//             cartCount.textContent = currentCount + 1;
//             const productTitle = link.parentElement.previousElementSibling.previousElementSibling.textContent;
//             cart.push(productTitle);
//             updateCartItems();
//         });
//     });
//     cartIcon.addEventListener('click', () => {
//         cartModal.style.display = 'block';
//     });
//     closeCartButton.addEventListener('click', () => {
//         cartModal.style.display = 'none';
//     });

//     function updateCartItems() {
//         cartItems.innerHTML = '';
//         cart.forEach(item => {
//             const listItem = document.createElement('li');
//             listItem.textContent = item;
//             cartItems.appendChild(listItem);
//         });
//     }
// });



    // const shopNowLinks = document.querySelectorAll('.shop-now');
    // // Get the cart count element
    // const cartCount = document.getElementById('cart-count');
    // // Get the cart icon and cart modal elements
    // const cartIcon = document.getElementById('cart-icon');
    // const cartModal = document.getElementById('cart-modal');
    // const cartItems = document.getElementById('cart-items');
    // const closeCartButton = document.getElementById('close-cart');
    
    // // Initialize cart array
    // let cart = [];

    // // Add click event listeners to each "Shop now" link
    // shopNowLinks.forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         event.preventDefault();  // Prevent the default action of the link
    //         let currentCount = parseInt(cartCount.textContent, 10);
    //         cartCount.textContent = currentCount + 1;

    //         // Get the product title from the corresponding h2 element
    //         const productTitle = link.parentElement.previousElementSibling.previousElementSibling.textContent;
    //         // Add product to cart array
    //         cart.push(productTitle);

    //         // Update the cart items in the modal
    //         updateCartItems();
    //     });
    // });

    // // Add click event listener to the cart icon
    // cartIcon.addEventListener('click', () => {
    //     // Display the cart modal
    //     cartModal.style.display = 'block';
    // });

    // // Add click event listener to the close button in the cart modal
    // closeCartButton.addEventListener('click', () => {
    //     // Hide the cart modal
    //     cartModal.style.display = 'none';
    // });

    // // Function to update the cart items in the modal
    // function updateCartItems() {
    //     // Clear existing items
    //     cartItems.innerHTML = '';

    //     // Add each item in the cart array to the modal
    //     cart.forEach(item => {
    //         const listItem = document.createElement('li');
    //         listItem.textContent = item;
    //         cartItems.appendChild(listItem);
    //     });
    // }

    // const cartIcon = document.getElementById('cart-icon');

    // let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // function updateCartCount() {
    //     cartCount.textContent = cart.length;
    // }

    // shopNowLinks.forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         const productBox = link.closest('.box-content').innerHTML;
    //         cart.push(productBox);
    //         localStorage.setItem('cart', JSON.stringify(cart));
    //         updateCartCount();
    //     });
    // });

    // cartIcon.addEventListener('click', () => {
    //     window.location.href = 'cart.html';
    // });

    // updateCartCount();


    // const shopNowLinks = document.querySelectorAll('.shop-now');
    // const cartCount = document.getElementById('cart-count');
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