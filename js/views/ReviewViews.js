// Rating
const birds = document.querySelectorAll(".stars .bird");
let selectedRating = 0;

birds.forEach((bird, index1) => {
  bird.addEventListener("click", () => {
    selectedRating = index1 + 1;
    birds.forEach((bird, index2) => {
      index2 <= index1
        ? bird.classList.add("active")
        : bird.classList.remove("active");
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const citySelect = document.getElementById('city');

  const destinations = [
    { city: "Paris", country: "France" },
    { city: "Lisbon", country: "Portugal" },
    { city: "Rome", country: "Italy" },
    { city: "London", country: "UK" },
    { city: "Tokyo", country: "Japan" },
    { city: "New York", country: "USA" }
  ];

  destinations.forEach(dest => {
    const option = document.createElement('option');
    option.value = `${dest.city}, ${dest.country}`;
    option.textContent = `${dest.city}, ${dest.country}`;
    citySelect.appendChild(option);
  });

  // Rating interaction (bonus)
  const birds = document.querySelectorAll('.bird');
  birds.forEach((bird, index) => {
    bird.addEventListener('click', () => {
      birds.forEach((b, i) => {
        b.classList.toggle('active', i <= index);
      });
    });
  });
});


// Submissão do formulário
const addBtn = document.querySelector(".add-btn");
const cityInput = document.getElementById("city");
const reviewInput = document.getElementById("review");
const reviewList = document.querySelector(".review-list");

addBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  const review = reviewInput.value.trim();

  if (!city || !review || selectedRating === 0) {
    alert("Please fill in all fields and select a rating.");
    return;
  }

  const newReview = {
    city,
    review,
    rating: selectedRating,
    date: new Date().toLocaleDateString(),
  };

  // Guardar no localStorage
  let reviews = JSON.parse(localStorage.getItem("swiftReviews")) || [];
  reviews.push(newReview);
  localStorage.setItem("swiftReviews", JSON.stringify(reviews));

  // Limpar inputs
  cityInput.value = "";
  reviewInput.value = "";
  birds.forEach(b => b.classList.remove("active"));
  selectedRating = 0;

  renderReviews();
});

function renderReviews() {
  const reviews = JSON.parse(localStorage.getItem("swiftReviews")) || [];
  reviewList.innerHTML = "";

  reviews.forEach(r => {
    const card = document.createElement("div");
    card.classList.add("review-card");

    card.innerHTML = `
      <h3>${r.city} - ${r.date}</h3>
      <p>${r.review}</p>
      <div class="stars">
        ${'<img src="/assets/img/birdreview.png" class="bird active">'.repeat(r.rating)}
        ${'<img src="/assets/img/birdreview.png" class="bird">'.repeat(5 - r.rating)}
      </div>
    `;

    reviewList.appendChild(card);
  });
}

// Render ao carregar
document.addEventListener("DOMContentLoaded", renderReviews);
