import * as UserModel from "../models/UserModel.js";

// Mostra formulário de login
export function renderLoginForm(container) {
  container.innerHTML = `
    <h2>Login</h2>
    <form id="loginForm">
      <input type="text" id="loginUsername" placeholder="Username" required />
      <input type="password" id="loginPassword" placeholder="Password" required />
      <button type="submit">Entrar</button>
      <div id="loginError" style="color:red;"></div>
    </form>
  `;

  document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    try {
      UserModel.login(username, password);
      renderWelcome(container, username);
    } catch (err) {
      document.getElementById("loginError").textContent = err.message;
    }
  };
}

// Mostra formulário de registo
export function renderRegisterForm(container) {
  container.innerHTML = `
    <h2>Registar</h2>
    <form id="registerForm">
      <input type="text" id="registerUsername" placeholder="Username" required />
      <input type="password" id="registerPassword" placeholder="Password" required />
      <button type="submit">Registar</button>
      <div id="registerError" style="color:red;"></div>
    </form>
  `;

  document.getElementById("registerForm").onsubmit = function (e) {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    try {
      UserModel.add(username, password);
      renderLoginForm(container);
    } catch (err) {
      document.getElementById("registerError").textContent = err.message;
    }
  };
}

// Mostra mensagem de boas-vindas e botão de logout
export function renderWelcome(container, username) {
  container.innerHTML = `
    <h2>Bem-vindo, ${username}!</h2>
    <button id="logoutBtn">Logout</button>
  `;
  document.getElementById("logoutBtn").onclick = function () {
    UserModel.logout();
    renderLoginForm(container);
  };
}