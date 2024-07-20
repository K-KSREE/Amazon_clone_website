# Amazon Clone

## Overview

This project is a web application designed to replicate the basic functionality of the Amazon website. It includes a home page showcasing various product categories, a user registration system, a login page, and a shopping cart feature. The project uses HTML, CSS, and JavaScript to achieve its functionality.

## Features

- **Homepage**: 
  - Displays multiple product categories with images and "Shop now" buttons.
  - Users can click on the "Shop now" buttons to add items to the shopping cart.
  
- **Sign Up Page**:
  - Users can register for an account.
  - Includes validation for email format and password strength.
  
- **Login Page**:
  - Users can log in using their registered email and password.
  - Includes validation to check for existing users and correct passwords.

- **Cart Functionality**:
  - Products added to the cart are stored in the browser's localStorage.
  - Users can view all items added to the cart on a separate `cart.html` page.

## Installation

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).
- Basic knowledge of HTML, CSS, and JavaScript.

### Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/amazon-clone.git
2. **Navigate to the Project Directory**
   cd amazon-clone

3. **Open index.html**
  Open index.html in your preferred web browser to view the homepage. You can use any text editor to view or edit the project files.

## Usage
# 1. Homepage
Product Categories: Browse through various product categories. Each category has a "Shop now" button.
Adding to Cart: Click the "Shop now" button to add the product to your shopping cart.
# 2. Sign Up
Navigating to Sign Up: Go to signup.html to access the registration page.
Filling Out the Form:
Name: Enter your full name.
Email: Enter a valid email address. An error message will appear for invalid emails or already registered emails.
Password: Enter a password that meets the specified criteria (at least 8 characters long, containing uppercase, lowercase, numbers, and special characters).
Confirm Password: Re-enter the password to confirm.
Submit: Click the "Sign Up" button to complete registration.
# 3. Login
Navigating to Login: Go to login.html to access the login page.
Filling Out the Form:
Email: Enter your registered email address.
Password: Enter your password.
Submit: Click the "Log In" button to access your account. Error messages will display for incorrect credentials or non-existing users.
# 4. Cart
Viewing Cart: Click the cart icon on the homepage header to view the items in the cart. You will be redirected to cart.html.
Displaying Cart Items: The cart page displays all items added to the cart with their details.
## File Descriptions
index.html: The main page of the application, showcasing various product categories with "Shop now" buttons.
signup.html: The registration page where users can sign up for a new account.
login.html: The login page for existing users to access their accounts.
cart.html: The page displaying all products added to the shopping cart.
style.css: The main stylesheet for the homepage.
signup_style.css: Styles specific to the sign-up page.
login_style.css: Styles specific to the login page.
script.js: Contains JavaScript for managing the shopping cart, sign-in tooltips, and updating cart count.
signup_script.js: JavaScript for validating the sign-up form, including email format and password strength.
login_script.js: JavaScript for validating user login credentials.

## Contributing
Contributions to this project are welcome. To contribute:

## Fork the repository.
Create a new branch for your changes.
Make your changes and commit them.
Push your changes to your forked repository.
Create a pull request describing your changes.