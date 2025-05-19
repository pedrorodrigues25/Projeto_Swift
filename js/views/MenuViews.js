function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("hidden");
}

// Opcional: fecha o menu se clicar fora
document.addEventListener("click", function(event) {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".menu-wrapper");

  if (!icon.contains(event.target)) {
    menu.classList.add("hidden");
  }
});
