import { getUserLogged } from '/js/models/UserModel.js';

document.addEventListener('DOMContentLoaded', function () {
  // Dias
  const daySelect = document.getElementById('dob-day');
  for (let d = 1; d <= 31; d++) {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d;
    daySelect.appendChild(opt);
  }

  // Meses
  const monthSelect = document.getElementById('dob-month');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  months.forEach((m, i) => {
    const opt = document.createElement('option');
    opt.value = i + 1;
    opt.textContent = m;
    monthSelect.appendChild(opt);
  });

  // Anos (mínimo 18 anos)
  const yearSelect = document.getElementById('dob-year');
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 18;
  for (let y = minYear; y >= 1960; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }

  // Liga botões
  const saveBtn = document.getElementById("saveSettingsBtn");
  saveBtn.addEventListener("click", saveSettings);

  const deleteBtn = document.querySelector(".delete-account");
  deleteBtn.addEventListener("click", deleteAccount);
});

function saveSettings() {
  const fullName = document.getElementById("name").value.trim();
  const displayName = document.getElementById("display-name").value.trim();
  const email = document.getElementById("email").value.trim();

  const dobDay = document.getElementById("dob-day").value;
  const dobMonth = document.getElementById("dob-month").value;
  const dobYear = document.getElementById("dob-year").value;

  const phone = document.getElementById("phone").value.trim();

  const genderInput = document.querySelector('input[name="sex"]:checked');
  const paymentInput = document.querySelector('input[name="payment"]:checked');

  let user = getUserLogged();
  let updated = false;

  if (fullName && fullName !== user.fullName) {
    user.fullName = fullName;
    updated = true;
  }

  if (displayName && displayName !== user.username) {
    user.username = displayName;
    updated = true;
  }

  if (email && email !== user.email) {
    user.email = email;
    updated = true;
  }

  if (dobDay && dobMonth && dobYear) {
    const newDOB = `${dobDay}-${dobMonth}-${dobYear}`;
    if (newDOB !== user.birthDate) {
      user.birthDate = newDOB;
      updated = true;
    }
  }

  if (phone && phone !== user.phoneNumber) {
    user.phoneNumber = phone;
    updated = true;
  }

  if (genderInput && genderInput.value !== user.gender) {
    user.gender = genderInput.value;
    updated = true;
  }

  if (paymentInput && paymentInput.value !== user.defaultPaymentMethod) {
    user.defaultPaymentMethod = paymentInput.value;
    updated = true;
  }

  if (updated) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex(u => u.userId === user.userId);
    if (index !== -1) {
      users[index] = user;
      localStorage.setItem("users", JSON.stringify(users));
    }

    alert("Alterações guardadas com sucesso!");
  } else {
    alert("Nenhuma alteração foi feita.");
  }

  window.location.href = "/html/account.html";
}

function deleteAccount() {
  if (!confirm("Tem a certeza que deseja eliminar a sua conta? Esta ação é irreversível.")) {
    return;
  }

  const user = getUserLogged();

  // Remover do localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users = users.filter(u => u.userId !== user.userId);
  localStorage.setItem("users", JSON.stringify(users));

  // Remover do sessionStorage
  sessionStorage.removeItem("loggedUser");

  alert("A sua conta foi eliminada com sucesso.");

  // Redirecionar para login
  window.location.href = "/html/login.html";
}
