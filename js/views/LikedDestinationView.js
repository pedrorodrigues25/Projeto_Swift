const destinations = [
    { name: "Paris", img: "/assets/img/paris.png" },
    { name: "Nice", img: "/assets/img/nice.png" },
    { name: "London", img: "/assets/img/london.png" },
    { name: "Paris", img: "/assets/img/paris.png" },
    { name: "Nice", img: "/assets/img/nice.png" },
    { name: "London", img: "/assets/img/london.png" },
  ];

  const container = document.getElementById("destinations-container");

  destinations.forEach(dest => {
    const card = document.createElement("div");
    card.className = "destination-card";
    card.innerHTML = `
      <img src="${dest.img}" alt="${dest.name}" />
      <h3>${dest.name}</h3>
    `;
    container.appendChild(card);
  });