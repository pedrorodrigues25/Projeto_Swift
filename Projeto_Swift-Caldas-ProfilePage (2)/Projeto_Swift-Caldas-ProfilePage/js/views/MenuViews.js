function toggleMenuDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector(".menu-icon");

  if (icon) {
    icon.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleMenuDropdown();
    });
  }

  // Fecha o menu se clicar fora
  document.addEventListener("click", function(event) {
    const menu = document.getElementById("dropdownMenu");
    const wrapper = document.querySelector(".menu-wrapper");

    if (!wrapper.contains(event.target)) {
      menu.classList.add("hidden");
    }
  });
}); 