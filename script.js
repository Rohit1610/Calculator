const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "=", "Enter", "Backspace"];
let output = "";

const calculate = (btnValue) => {
  if ((btnValue === "=" || btnValue === "Enter") && output !== "") {
    output = eval(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL" || btnValue === "Backspace") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  console.log(e.key);
  if (specialChars.includes(key) || /^\d$/.test(key)) {
    e.preventDefault();
    calculate(key);
  }
});
