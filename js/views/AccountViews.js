import { getUserLogged, logout, isLogged, init } from '/js/models/UserModel.js';

document.addEventListener('DOMContentLoaded', () => {
  init(); // ← garante que users está carregado se precisares mais tarde

  if (!isLogged()) {
    alert("You're not logged in!");
    window.location.href = "/html/login.html";
    return;
  }

  const user = getUserLogged();

  document.getElementById("username").textContent = user.username;
  document.getElementById("email").textContent = user.email;
  document.getElementById("profileImage").src = user.coverPhoto || "/assets/img/profileDefault.png";
  document.getElementById("quizCount").textContent = `Completed ${user.quizzes.length} quizzes`;
  document.getElementById("paymentMethod").textContent = `Used default payment: ${user.defaultPaymentMethod || "—"}`;
  document.getElementById("birthDate").textContent = `Born on: ${user.birthDate || "—"}`;

  document.getElementById("gender").textContent = `Gender: ${user.gender || "—"}`;
  document.getElementById("phone").textContent = `Phone: ${user.phoneNumber || "—"}`;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    logout();
    window.location.href = "/html/login.html";
  });
});

const fileInput = document.getElementById('profileUpload');
const profileImage = document.getElementById('profileImage');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profileImage.src = event.target.result;
      // Aqui poderás também salvar esta imagem se quiseres!
    };
    reader.readAsDataURL(file);
  }
});
