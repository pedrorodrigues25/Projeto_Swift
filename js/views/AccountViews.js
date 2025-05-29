// /js/views/AccountView.js

import { getUserLogged, logout, isLogged } from '/js/models/UserModel.js';

document.addEventListener('DOMContentLoaded', () => {
  if (!isLogged()) {
    alert("You're not logged in!");
    window.location.href = "/html/login.html";
    return;
  }

  const user = getUserLogged();

  document.getElementById("username").textContent = user.username;
  document.getElementById("email").textContent = user.email;
  document.getElementById("profileImage").src = user.coverPhoto || "/assets/img/profile.png";
  document.getElementById("quizCount").textContent = `Completed ${user.quizzes.length} quizzes`;
  document.getElementById("paymentMethod").textContent = `Used default payment: ${user.defaultPaymentMethod || "—"}`;
  document.getElementById("birthDate").textContent = `Born on: ${user.birthDate || "—"}`;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    logout();
    window.location.href = "/html/login.html";
  });
});
