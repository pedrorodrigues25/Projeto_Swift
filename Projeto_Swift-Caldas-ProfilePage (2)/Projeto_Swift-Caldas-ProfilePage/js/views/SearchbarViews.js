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
  const today = new Date().toISOString().split('T')[0];
  const departureInput = document.getElementById('departure-picker');
  const arrivalInput = document.getElementById('arrival-picker');
  

  // Limita a datas futuras
  departureInput.setAttribute('min', today);
  arrivalInput.setAttribute('min', today);

  arrivalInput.disabled = true;

  departureInput.addEventListener('change', function () {
    const formatted = formatDate(this.value);
    document.getElementById('selected-departure').textContent = formatted;

    // Ativa arrival e define data mínima igual à departure
    arrivalInput.disabled = false;
    arrivalInput.setAttribute('min', this.value);

    // Se arrival já tiver uma data inválida, limpa
    if (arrivalInput.value && arrivalInput.value < this.value) {
      arrivalInput.value = "";
      document.getElementById('selected-arrival').textContent = "Select date";
    }

    closeAllDropdowns();
  });

  // Eventos de mudança
  departureInput.addEventListener('change', function () {
  const formatted = formatDate(this.value);
  document.getElementById('selected-departure').textContent = formatted;
  
  // Atualiza o mínimo da data de chegada
  arrivalInput.setAttribute('min', this.value);
  
  // Se a chegada já estiver definida e for anterior, limpa-a
  if (arrivalInput.value && arrivalInput.value < this.value) {
    arrivalInput.value = "";
    document.getElementById('selected-arrival').textContent = "Select date";
  }

  closeAllDropdowns();
});

  arrivalInput.addEventListener('change', function () {
    const formatted = formatDate(this.value);
    document.getElementById('selected-arrival').textContent = formatted;
    closeAllDropdowns();
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
});

document.addEventListener("DOMContentLoaded", function () {
  // Eventos de abertura de dropdowns
  document.getElementById('whereto-toggle').addEventListener('click', () => toggleDropdown('whereto-dropdown'));
  document.getElementById('departure-toggle').addEventListener('click', () => toggleDropdown('departure-dropdown'));
  document.getElementById('arrival-toggle').addEventListener('click', () => toggleDropdown('arrival-dropdown'));
  document.getElementById('travelers-toggle').addEventListener('click', () => toggleDropdown('travelers-dropdown'));
  document.getElementById('class-toggle').addEventListener('click', () => toggleDropdown('class-dropdown'));

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

  document.querySelectorAll('.destination-option').forEach(option => {
  option.addEventListener('click', () => {
    const destination = option.getAttribute('data-destination');
    document.getElementById('selected-destination').textContent = destination;
    closeAllDropdowns();
  });
});

  // Botão de pesquisa
  document.getElementById('search-btn').addEventListener('click', performSearch);
});

document.getElementById("search-btn").addEventListener("click", () => {
  const destination = document.getElementById("selected-destination").textContent.trim();
  const departureDate = document.getElementById("selected-departure").textContent.trim();
  const arrivalDate = document.getElementById("selected-arrival").textContent.trim();
  const travelers = document.getElementById("selected-travelers").textContent.trim();
  const travelClass = document.getElementById("selected-class").textContent.trim();

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
  }).toString();

  window.location.href = `/html/destination.html?${queryString}`;
});
