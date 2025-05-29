import * as userModel from '/js/models/UserModel.js';

document.addEventListener('DOMContentLoaded', () => {
  userModel.init();

  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    try {
      const success = userModel.login(username, password);
      if (success) {
        alert('Login successful!');
        window.location.href = "/html/account.html"; // Redirecionar para página da conta
      }
    } catch (error) {
      alert(error.message);
    }
  });
});

document.querySelector('.close-btn').onclick = function() {
  window.location.href = '/index.html';
};
