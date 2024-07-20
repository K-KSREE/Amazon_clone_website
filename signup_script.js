document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const emailMsg = document.getElementById('emailMsg');
    const passwordInput = document.getElementById('password');
    const confirmPassInput = document.getElementById('Confirmpass');
    const passwordTooltip = document.getElementById('passwordTooltip');
    const registeredMsg = document.getElementById('registeredMsg');

    
    function validatePassword(password) {
      const minLength = /.{8,}/;
      const hasUpperCase = /[A-Z]/;
      const hasLowerCase = /[a-z]/;
      const hasNumber = /\d/;
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

      if (!minLength.test(password)) {
        return "Password must be at least 8 characters long.";
      }
      if (!hasUpperCase.test(password)) {
        return "Password must contain at least one uppercase letter.";
      }
      if (!hasLowerCase.test(password)) {
        return "Password must contain at least one lowercase letter.";
      }
      if (!hasNumber.test(password)) {
        return "Password must contain at least one number.";
      }
      if (!hasSpecialChar.test(password)) {
        return "Password must contain at least one special character.";
      }
      return "Password is valid.";
    }

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    emailInput.addEventListener('input', () => {
      const email = emailInput.value;
      if (!validateEmail(email)) {
        emailMsg.classList.remove('hidden');
      } else {
        emailMsg.classList.add('hidden');
      }
    });

    passwordInput.addEventListener('mouseenter', () => {
      const rect = passwordInput.getBoundingClientRect();
      passwordTooltip.style.left = `${rect.left}px`;
      passwordTooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
      passwordTooltip.style.display = 'block';
    });

    passwordInput.addEventListener('mouseleave', () => {
      passwordTooltip.style.display = 'none';
    });

    
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = emailInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPassInput.value;

      let users = localStorage.getItem('users');
      users = users ? JSON.parse(users) : [];
      const userExists = users.some(user => user.email === email);
      if (userExists) {
          registeredMsg.classList.remove('hidden');
          return;
      } else {
          registeredMsg.classList.add('hidden');
      }


      const passwordValidationMessage = validatePassword(password);
      if (passwordValidationMessage !== "Password is valid.") {
        passwordMsg.innerHTML = passwordValidationMessage;
        passwordMsg.classList.remove('hidden');
        return;
      }
      else{
        passwordMsg.classList.add('hidden');
      }
      if (password !== confirmPassword) {
        confirmPassMsg.classList.remove('hidden');
        return;
      }
      else{
        confirmPassMsg.classList.add('hidden');
      }
      alert("Form submitted successfully!");
      let submitted = true;

      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      
      if(submitted){
        window.location.href = "index.html";
      }
    });
});
