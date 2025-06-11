// Recupera o score guardado no sessionStorage
const correctAnswers = sessionStorage.getItem("quizScore") || 0;

// Atualiza o texto com a pontuação
const scoreText = document.getElementById("score-text");
scoreText.textContent = `You got ${correctAnswers} out of 6 questions right!`;

window.addEventListener('DOMContentLoaded', () => {
  const scoreText = document.getElementById('score-text');

  // Obtem pontuação do localStorage
  const score = parseInt(localStorage.getItem('quizScore')) || 0;
  let message = "";

  // Gera mensagem personalizada com base no score
  if (score === 6) {
    message = "Incrível! 🎯 Acertaste todas!";
  } else if (score >= 4) {
    message = "Muito bem! 🏆 Acertaste " + score + " de 6.";
  } else if (score >= 2) {
    message = "Boa tentativa! 😊 Acertaste " + score + " de 6.";
  } else {
    message = "Precisas de treinar! 😅 Só acertaste " + score + " de 6.";
  }

  // Mostra no HTML
  scoreText.textContent = message;
});
