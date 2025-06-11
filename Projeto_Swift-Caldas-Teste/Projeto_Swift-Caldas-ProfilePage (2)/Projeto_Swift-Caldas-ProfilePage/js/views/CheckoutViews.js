// CheckoutViews.js

document.addEventListener("DOMContentLoaded", () => {
  // Obter os parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  const destination = params.get("destination") || "Unknown";
  const departure = params.get("departure") || "Not selected";
  const arrival = params.get("arrival") || "Not selected";
  const travelers = params.get("travelers") || "Not defined";
  const travelClass = params.get("class") || "Economy";

  const destinationTitle = document.getElementById("checkout-destination-title");
  const summaryInfo = document.getElementById("checkout-summary");

  if (destinationTitle) {
    destinationTitle.textContent = `Confirm your trip to ${destination}`;
  }

  if (summaryInfo) {
    summaryInfo.innerHTML = `
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Departure:</strong> ${departure}</p>
      <p><strong>Arrival:</strong> ${arrival}</p>
      <p><strong>Travelers:</strong> ${travelers}</p>
      <p><strong>Class:</strong> ${travelClass}</p>
    `;
  }

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

  const infoCard = document.getElementById("checkout-info-card");
  if (infoCard) {
    const data = destinationData[destination] || {
      image: "/assets/img/default.png",
      description: "No detailed information available for this destination.",
    };

    infoCard.innerHTML = `
      <img src="${data.image}" alt="${destination} image">
      <p>${data.description}</p>
    `;
  }
});
