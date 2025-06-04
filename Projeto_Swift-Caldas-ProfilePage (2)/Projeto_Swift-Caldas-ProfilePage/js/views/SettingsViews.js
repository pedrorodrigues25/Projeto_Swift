const phoneInput = document.getElementById("phone");
const flagSpan = document.getElementById("country-flag");

phoneInput.addEventListener("input", () => {
  const value = phoneInput.value.trim();

  const prefixes = {
    "+1": "🇺🇸",
    "+44": "🇬🇧",
    "+33": "🇫🇷",
    "+49": "🇩🇪",
    "+351": "🇵🇹",
    "+55": "🇧🇷",
    "+34": "🇪🇸"
  };

  let found = false;

  for (const prefix in prefixes) {
    if (value.startsWith(prefix.replace("+", ""))) {
      flagSpan.textContent = prefix;
      found = true;
      break;
    }
  }

  if (!found) {
    flagSpan.textContent = "+351";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Dias
  const daySelect = document.getElementById('dob-day');
  for (let d = 1; d <= 31; d++) {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d;
    daySelect.appendChild(opt);
  }

  // Meses
  const monthSelect = document.getElementById('dob-month');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  months.forEach((m, i) => {
    const opt = document.createElement('option');
    opt.value = i + 1;
    opt.textContent = m;
    monthSelect.appendChild(opt);
  });

  // Anos (mínimo 18 anos)
  const yearSelect = document.getElementById('dob-year');
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 18;
  for (let y = minYear; y >= 1960; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }
});
