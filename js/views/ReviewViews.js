const birds = document.querySelectorAll(".stars .bird");

birds.forEach((bird, index1) => {
  bird.addEventListener("click", () => {
    birds.forEach((bird, index2) => {
      index1 >= index2 ? bird.classList.add("active") : bird.classList.remove("active");
    });
  });
});
