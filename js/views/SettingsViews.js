document.addEventListener("DOMContentLoaded", () => {
  const deleteBtn = document.querySelector(".delete-account");

  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete your account?")) {
      alert("Account deleted (fake action).");
      // Aqui podes fazer redirecionamento ou chamar API real
    }
  });
});
