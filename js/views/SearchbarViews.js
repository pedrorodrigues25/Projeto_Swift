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

// Placeholder for search button
function performSearch() {
  alert('Search triggered!');
}