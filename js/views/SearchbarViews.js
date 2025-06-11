// Estado dos viajantes
let travellers = {
  adults: 2,
  children: 0,
  infants: 0
};

// Fecha todos os dropdowns
function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach(drop => {
    drop.style.display = 'none';
  });
}

// Alterna dropdown por ID
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const isVisible = dropdown.style.display === 'block';

  closeAllDropdowns();

  if (!isVisible) {
    dropdown.style.display = 'block';
  }
}

// Atualiza contadores
function updateCount(type, change) {
  if (travellers[type] + change >= 0) {
    travellers[type] += change;
    document.getElementById(`${type}-count`).textContent = travellers[type];
    updateTravellerText();
  }
}

// Atualiza o texto do botão principal
function updateTravellerText() {
  const { adults, children, infants } = travellers;
  let parts = [];

  if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? 's' : ''}`);
  if (children > 0) parts.push(`${children} Child${children > 1 ? 'ren' : ''}`);
  if (infants > 0) parts.push(`${infants} Infant${infants > 1 ? 's' : ''}`);

  const summary = parts.join(', ') || '0 Travelers';
  document.getElementById('selected-travelers').textContent = summary;
}

// Fecha dropdowns ao clicar fora
document.addEventListener('click', function (event) {
  const isInsideDropdown = event.target.closest('.dropdown-wrapper');
  if (!isInsideDropdown) {
    closeAllDropdowns();
  }
});

// Funções de debug mantidas
function openWhereTo() {
  console.log('Abrir filtro de destino');
}
function openDeparture() {
  console.log('Abrir calendário de partida');
}
function openArrival() {
  console.log('Abrir calendário de chegada');
}
function openTravelers() {
  console.log('Mostrar seletor de número de pessoas');
}
function openClass() {
  console.log('Mostrar opções de classe');
}

function finalizeTravelers() {
  updateTravellerText();   // Força a atualização
  closeAllDropdowns();     // Fecha o menu
}

function selectClass(className) {
  document.getElementById('selected-class').textContent = className;
}

document.addEventListener("DOMContentLoaded", function () {
  const selectedDeparture = document.getElementById('selected-departure');
  const selectedArrival = document.getElementById('selected-arrival');
  const arrivalInput = document.getElementById('arrival-picker');

  // Iniciar Flatpickr para Departure
  flatpickr("#departure-picker", {
    dateFormat: "Y-m-d",
    minDate: "today",
    onChange: function(selectedDates, dateStr) {
      selectedDeparture.textContent = formatDate(dateStr);

      // Ativar arrival
      arrivalInput.disabled = false;

      // Atualizar minDate da arrival
      if (arrivalInput._flatpickr) {
        arrivalInput._flatpickr.set("minDate", dateStr);
      }

      // Limpar arrival se for inválido
      if (arrivalInput.value && arrivalInput.value < dateStr) {
        arrivalInput._flatpickr.clear();
        selectedArrival.textContent = "Select date";
      }

      closeAllDropdowns();
    }
  });

  const departureInput = document.getElementById('departure-picker');

  departureInput.addEventListener("input", function () {
    if (!this.value) {
      arrivalInput.disabled = true;
      if (arrivalInput._flatpickr) {
        arrivalInput._flatpickr.clear();
      }
      selectedArrival.textContent = "Select date";
    }
  });

  // Iniciar Flatpickr para Arrival
  flatpickr("#arrival-picker", {
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr) {
      selectedArrival.textContent = formatDate(dateStr);
      closeAllDropdowns();
    }
  });

  // Função auxiliar para formatação
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
});

  window.toggleDropdown = function(id) {
    closeAllDropdowns();
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };

  window.closeAllDropdowns = function () {
    document.querySelectorAll('.dropdown').forEach(el => el.style.display = 'none');
  };

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

document.addEventListener("DOMContentLoaded", function () {
  // Eventos de abertura de dropdowns
  document.getElementById('whereto-toggle').addEventListener('click', () => toggleDropdown('whereto-dropdown'));
  document.getElementById('departure-toggle').addEventListener('click', () => {
    toggleDropdown('departure-dropdown');
    const dp = document.getElementById("departure-picker")._flatpickr;
    if (dp) dp.open();  // Abre o calendário ao clicar
  });

  document.getElementById('arrival-toggle').addEventListener('click', () => {
    const departureText = document.getElementById('selected-departure').textContent.trim();
    if (departureText === "Select date") {
      alert("Please choose a departure date first.");
      return;
    }

    toggleDropdown('arrival-dropdown');
    const ap = document.getElementById("arrival-picker")._flatpickr;
    if (ap) ap.open();  // Abre o calendário ao clicar
  });

  document.getElementById('travelers-toggle').addEventListener('click', () => toggleDropdown('travelers-dropdown'));
  document.getElementById('class-toggle').addEventListener('click', () => toggleDropdown('class-dropdown'));
  document.getElementById('turismo-toggle').addEventListener('click', () => toggleDropdown('turismo-dropdown'));

  // Eventos nos botões de contar pessoas
  document.querySelectorAll('.count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const change = parseInt(btn.getAttribute('data-change'));
      updateCount(type, change);
    });
  });

  // Botão Done dos viajantes
  document.getElementById('travelers-done').addEventListener('click', finalizeTravelers);

  // Opções de classe
  document.querySelectorAll('.class-option').forEach(option => {
    option.addEventListener('click', () => {
      selectClass(option.getAttribute('data-class'));
      closeAllDropdowns();
    });
  });

  // Opções de destino
  document.querySelectorAll('.destination-option').forEach(option => {
    option.addEventListener('click', () => {
      const destination = option.getAttribute('data-destination');
      document.getElementById('selected-destination').textContent = destination;
      closeAllDropdowns();
    });
  });

  // Opções de turismo
  document.querySelectorAll('.turismo-option').forEach(option => {
    option.addEventListener('click', () => {
      const turismo = option.getAttribute('data-airline');
      document.getElementById('selected-airline').textContent = turismo;
      closeAllDropdowns();
    });
  });

  // Botão de pesquisa
  document.getElementById('search-btn').addEventListener('click', performSearch);
});

function performSearch() {
  const destination = document.getElementById("selected-destination").textContent.trim();
  const departureDate = document.getElementById("selected-departure").textContent.trim();
  const arrivalDate = document.getElementById("selected-arrival").textContent.trim();
  const travelers = document.getElementById("selected-travelers").textContent.trim();
  const travelClass = document.getElementById("selected-class").textContent.trim();
  const turismo = document.getElementById("selected-airline").textContent.trim();

  // Verificar se algum campo está por preencher
  const missingFields = [];

  if (destination === "e.g Paris") missingFields.push("destination");
  if (departureDate === "Select date") missingFields.push("departure date");
  if (arrivalDate === "Select date") missingFields.push("arrival date");
  if (!travelers || travelers === "0 Travelers") missingFields.push("travelers");
  if (!travelClass) missingFields.push("class");

  if (missingFields.length > 0) {
    alert(`Please complete the following before searching:\n- ${missingFields.join("\n- ")}`);
    return;
  }

  const queryString = new URLSearchParams({
    destination,
    departure: departureDate,
    arrival: arrivalDate,
    travelers,
    class: travelClass,
    turismo
  }).toString();

  window.location.href = `/html/destination.html?${queryString}`;
}
