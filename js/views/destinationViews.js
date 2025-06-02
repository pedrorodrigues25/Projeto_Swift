// Obter parâmetros da URL
const params = new URLSearchParams(window.location.search);

const destination = params.get("destination") || "Unknown";
const departure = params.get("departure") || "Not selected";
const arrival = params.get("arrival") || "Not selected";
const travelers = params.get("travelers") || "Not defined";
const travelClass = params.get("class") || "Economy";

// Preencher o conteúdo da página
document.getElementById("destination-name").textContent = destination;
document.getElementById("departure-date").textContent = departure;
document.getElementById("arrival-date").textContent = arrival;
document.getElementById("travelers-count").textContent = travelers;
document.getElementById("travel-class").textContent = travelClass;

document.getElementById("destination-title").textContent = `Your trip to ${destination}`;

// (Opcional) Mostrar imagem e descrição específicas
const destinationData = {
  Paris: {
    image: "/assets/img/paris.png",
    description: "Romantic city with famous landmarks like the Eiffel Tower and the Louvre.",
  },
  Rome: {
    image: "/assets/img/rome.png",
    description: "Historical city full of ancient monuments and delicious food.",
  },
  London: {
    image: "/assets/img/london.png",
    description: "Vibrant capital with rich history and modern attractions.",
  },
  Barcelona: {
    image: "/assets/img/barcelona.png",
    description: "Coastal city with Gaudí architecture and sunny beaches.",
  },
};

const card = document.getElementById("destination-card");

if (destinationData[destination]) {
  card.querySelector("img").src = destinationData[destination].image;
  card.querySelector("p").textContent = destinationData[destination].description;
} else {
  card.querySelector("img").src = "/assets/img/default.png";
  card.querySelector("p").textContent = "No additional information available for this destination.";
}
