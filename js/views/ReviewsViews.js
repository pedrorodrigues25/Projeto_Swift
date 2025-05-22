// Dados falsos para teste
const reviews = [
  new review(
    "1",
    "paris",
    "Anne Smith",
    "/assets/img/user.jpg",
    "Paris é incrível! A Torre Eiffel é ainda mais linda ao vivo. Recomendo visitar durante a primavera.",
    ["/assets/img/paris1.jpg", "/assets/img/paris2.jpg", "/assets/img/paris3.jpg"]
  ),
  new review(
    "2",
    "paris",
    "João Mendes",
    "/assets/img/user.jpg",
    "Lugar maravilhoso, cultura e comida excepcionais. Voltarei com certeza!",
    ["/assets/img/paris4.jpg", "/assets/img/paris5.jpg", "/assets/img/paris6.jpg"]
  )
];

// Função para renderizar uma review no DOM
function renderReviews(reviewList) {
  const container = document.getElementById("reviewList");
  container.innerHTML = ""; // limpar antes de renderizar

  reviewList.forEach((rev) => {
    const card = document.createElement("div");
    card.className = "review-card";

    card.innerHTML = `
      <div class="review-user">
        <img src="${rev.userCoverPhoto}" alt="User Photo" class="user-photo">
        <div>
          <h4>${rev.userName}</h4>
          <p class="username">@${rev.userName.toLowerCase().replace(" ", "_")}</p>
        </div>
      </div>
      <div class="review-content">
        <h4>${rev.idDestination.charAt(0).toUpperCase() + rev.idDestination.slice(1)}</h4>
        <p class="review-date">15/03/2023</p>
        <p class="review-text">${rev.text}</p>
        <button class="btn-read">Read More</button>
      </div>
      <div class="review-images">
        ${rev.images.map(img => `<img src="${img}" alt="review image">`).join('')}
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Carregar ao iniciar
window.addEventListener("DOMContentLoaded", () => {
  renderReviews(reviews);
});
