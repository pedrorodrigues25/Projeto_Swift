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
