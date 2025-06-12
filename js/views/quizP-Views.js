// Dados simulados (podes depois puxar de localStorage ou API)
const userMiles = 1200;

const completedQuizzes = [
  { name: "Greece", score: 6, total: 6, img: "/assets/img/greece.png" },
  { name: "Nice", score: 4, total: 6, img: "/assets/img/nice.png" },
  { name: "Los Angeles", score: 3, total: 6, img: "/assets/img/losangeles.png" },
  { name: "Paris", score: 5, total: 6, img: "/assets/img/paris.png" }
];

const suggestedQuizzes = [
  { name: "France", reward: 300, img: "/assets/img/france.png" },
  { name: "France", reward: 300, img: "/assets/img/france.png" },
  { name: "France", reward: 300, img: "/assets/img/france.png" },
  { name: "France", reward: 300, img: "/assets/img/france.png" }
];

function loadQuizPage() {
  document.getElementById("miles").textContent = `${userMiles} Miles`;

  const quizContainer = document.getElementById("quiz-completed");
  completedQuizzes.forEach(q => {
    const div = document.createElement("div");
    div.classList.add("quiz-card");
    div.innerHTML = `
      <img src="${q.img}" alt="${q.name}">
      <div>${q.name}</div>
      <div>${q.score} / ${q.total}</div>
    `;
    quizContainer.appendChild(div);
  });

  const suggestedContainer = document.getElementById("quiz-suggested");
  suggestedQuizzes.forEach(q => {
  const div = document.createElement("div");
  div.classList.add("quiz-suggested-card");
  div.innerHTML = `
    <img src="${q.img}" alt="${q.name}">
    <div class="quiz-title">Quiz: ${q.name}</div>
    <div class="quiz-reward">Win up to ${q.reward} Miles</div>
    <button class="play-btn">Play Now</button>
  `;
  // Adiciona o event listener ao botão
  div.querySelector(".play-btn").addEventListener("click", () => {
    window.location.href = "/html/quiz-info.html";
  });
  suggestedContainer.appendChild(div);
});
}

document.addEventListener("DOMContentLoaded", loadQuizPage);
