const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const resultText = document.getElementById("result");
const rateInfoText = document.getElementById("rateInfo");

// API endpoint url
const BASE_URL = "https://open.er-api.com/v6/latest/";

// Default currencies
const DEFAULT_FROM = "EUR";
const DEFAULT_TO = "DKK";

// Load currencies into dropdowns
async function loadCurrencies() {
  try {
    const response = await fetch(`${BASE_URL}${DEFAULT_FROM}`);
    const data = await response.json();

    const currencyCodes = Object.keys(data.rates);
    currencyCodes.forEach((code) => {
      const optionFrom = document.createElement("option");
      optionFrom.value = code;
      if (code === DEFAULT_FROM) {
        optionFrom.selected = true;
      }
      optionFrom.textContent = code;
      fromCurrencySelect.appendChild(optionFrom);

      const optionTo = document.createElement("option");
      optionTo.value = code;
      if (code === DEFAULT_TO) {
        optionTo.selected = true;
      }
      optionTo.textContent = code;
      toCurrencySelect.appendChild(optionTo);
    });
  } catch (error) {
    resultText.textContent = "Failed to load currencies.";
    rateInfoText.textContent = "";
    console.error("Error loading currencies:", error);
  }
}

// Convert currency
async function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrencySelect.value;
  const to = toCurrencySelect.value;

  if (isNaN(amount) || amount < 0) {
    resultText.textContent = "Please enter a valid amount.";
    rateInfoText.textContent = "";
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}${from}`);
    const data = await response.json();

    const rate = data.rates[to];
    const convertedAmount = amount * rate;

    resultText.textContent = `${convertedAmount.toFixed(2)} ${to}`;
    rateInfoText.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
  } catch (error) {
    resultText.textContent = "Conversion failed.";
    rateInfoText.textContent = "";
    console.error("Error converting currency:", error);
  }
}

// Event listeners
amountInput.addEventListener("input", convertCurrency);
fromCurrencySelect.addEventListener("change", convertCurrency);
toCurrencySelect.addEventListener("change", convertCurrency);

// Initialize app
loadCurrencies();
