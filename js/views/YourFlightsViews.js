const flights = [
    {
      destination: "Paris",
      flight: "EZ101",
      departure: "2025-05-17",
      arrival: "2025-05-20"
    },
    {
      destination: "Nice",
      flight: "EZ214",
      departure: "2025-08-15",
      arrival: "2025-08-20"
    },
    {
      destination: "Paris",
      flight: "EZ101",
      departure: "2025-12-28",
      arrival: "2026-01-05"
    }
  ];

  const container = document.getElementById("flights-container");
  const today = new Date().toISOString().split('T')[0];

  flights.forEach(flight => {
    const arrival = flight.arrival;
    const btnClass =
      arrival > today ? "btn-upcoming" :
      arrival < today ? "btn-past" : "btn-today";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="color: ${flight.destination === 'Paris' ? '#f9a825' : flight.destination === 'Nice' ? '#ff9800' : '#333'}">${flight.destination}</td>
      <td>${flight.flight}</td>
      <td>${formatDate(flight.departure)}</td>
      <td>${formatDate(flight.arrival)}</td>
      <td>
        <button class="more-info-btn ${btnClass}" onclick="window.location.href='/html/destination.html?id=${flight.flight}'">More Info</button>
      </td>
    `;
    container.appendChild(row);
  });

  function formatDate(dateStr) {
    const [yyyy, mm, dd] = dateStr.split("-");
    return `${dd}/${mm}/${yyyy}`;
  }