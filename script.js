let input = document.getElementById("input");

function updateDisplay(value) {
  input.value += value;
}

function clearDisplay() {
  input.value = "";
}

function calculate() {
  let result = eval(input.value);
  input.value = result.toFixed(2);
}
