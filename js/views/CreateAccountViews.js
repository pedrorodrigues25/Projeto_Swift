import * as userModel from '/js/models/UserModel.js';

document.addEventListener('DOMContentLoaded', () => {
  userModel.init();

  const form = document.getElementById('createAccountForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const userId = crypto.randomUUID();

    // ✅ 1. Validação adicional de campos
    if (username.length < 3 || password.length < 6) {
      alert("Username must be at least 3 characters and password at least 6 characters.");
      return;
    }

    // ✅ 2. Verificação de email duplicado (precisas também de atualizar o UserModel.js para suportar isto)
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (allUsers.some(user => user.email === email)) {
      alert("An account with this email already exists.");
      return;
    }

    try {
      userModel.add(
        userId,
        username,
        password,
        email,
        '',     // coverPhoto
        '',     // birthDate
        '',     // phoneNumber
        '',     // defaultPaymentMethod
        '',     // gender
        []      // quizzes
      );

      // ✅ 3. Redirecionamento suave (podes tirar o alert se quiseres)
      alert('Account created! You can now log in.');
      window.location.href = '/html/login.html';
    } catch (err) {
      alert(err.message);
    }
  });

  document.querySelector('.close-btn').onclick = function () {
    window.location.href = '/index.html';
  };
});
