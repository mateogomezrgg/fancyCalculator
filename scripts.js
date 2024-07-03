const display = document.getElementById("display");
let isCalculated = false;
const btnDelete = document.getElementById("btnDelete");

const appendToDisplay = (input) => {
  if (isCalculated && NaN) {
    display.value = "";
    isCalculated = false;
  }
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
  isCalculated = false;
  btnDelete.classList.remove("btnDisabled");
};

const deleteLastOnDisplay = () => {
  if (isCalculated && NaN) {
    display.value = "";
    isCalculated = false;
  } else {
    let currentValue = display.value.split("");
    currentValue.pop();
    display.value = currentValue.join("");
  }
};

const changeNumberSign = () => {
  display.value = display.value * -1;
};

const calculate = () => {
  try {
    const result = eval(display.value);
    display.value = result;
    isCalculated = true;
    btnDelete.classList.add("btnDisabled");
  } catch (e) {
    display.value = "Error";
  }
};
