// /js/views/CreateAccount.views.js

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
      alert('Account created! You can now log in.');
      window.location.href = '/html/login.html';
    } catch (err) {
      alert(err.message);
    }
  });
});
