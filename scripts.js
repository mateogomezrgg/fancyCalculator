const display = document.getElementById("display");

const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteLastOnDisplay = () => {
  let currentValue = display.value.split("");
  currentValue.pop();
  display.value = currentValue.join("");
};

const changeNumberSign = () => {
  display.value = display.value * -1;
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
};
