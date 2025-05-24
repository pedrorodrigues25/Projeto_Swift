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
    const birthDate = ''; // Pode ser preenchido futuramente
    const coverPhoto = '';
    const quizzes = [];

    try {
      userModel.add(username, password);
      // Como `add()` aceita só username e password, você pode estender no modelo se quiser salvar tudo
      alert('Account created! You can now log in.');
      window.location.href = 'login.html'; // redirecionar após cadastro
    } catch (err) {
      alert(err.message);
    }
  });
});
