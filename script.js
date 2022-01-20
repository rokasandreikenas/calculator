const resultTag = document.getElementById("result-input");
const actionLineTag = document.querySelector(".action-line");
const numberButtons = document.querySelectorAll(".row button");
const colorButtons = document.querySelector(".color-buttons");
const calculator = document.querySelector(".calculator");
const additionButton = document.getElementById("addition");
const actionButtons = document.querySelectorAll(".action-buttons button");
const equalButton = document.querySelector(".right-side button");

// Calculator functionality

let dotAdded = false;
let result = 0;

const handleNumberButtonClick = (button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    switch (value) {
      case "C":
        resultTag.innerText = 0;
        actionLineTag.innerText = "";
        result = 0;
        dotAdded = false;
        break;
      case ".":
        if (!dotAdded) {
          resultTag.innerText += value;
        }

        dotAdded = true;
        break;

      default:
        if (resultTag.innerText === "0") {
          resultTag.innerText = value;
        } else {
          resultTag.innerText += value;
        }
        break;
    }
  });
};

const handleActionButtonClick = (button) => {
  button.addEventListener("click", () => numbersAction(button.value));
};

const numbersAction = (symbol) => {
  const resultValue = Number(resultTag.innerText);

  modifyActionLine(symbol, resultValue, result);
  const actionValue = makeActionBySymbol(symbol, resultValue, result);
  result = actionValue;

  resultTag.innerText = 0;
  dotAdded = false;
};

const modifyActionLine = (symbol, value, result) => {
  const actionValue = makeActionBySymbol(symbol, value, result);

  actionLineTag.innerText = `${result} ${symbol} ${value} = ${actionValue}`;
};

const makeActionBySymbol = (symbol, value, result) => {
  switch (symbol) {
    case "+":
      return result + value;
    case "-":
      return result - value;
    case "*":
      return result * value;
    case "/":
      return result / value;
    default:
      return 0;
  }
};

const handleEqualButtonClick = () => {
  resultTag.innerText = 0;
  actionLineTag.innerText = result;
};

equalButton.addEventListener("click", handleEqualButtonClick);
numberButtons.forEach(handleNumberButtonClick);
actionButtons.forEach(handleActionButtonClick);

// Color functionality

const firstColor = {
  code: "white",
  label: "Balta",
};

const secondColor = {
  code: "green",
  label: "Zalia",
};

const thirdColor = {
  code: "blue",
  label: "Melyna",
};

const fourthColor = {
  code: "red",
  label: "Raudona",
};

const colorObjects = [firstColor, secondColor, thirdColor, fourthColor];

const handleCreateColorButton = (color) => {
  const colorButton = document.createElement("button");

  colorButton.innerText = color.label;
  colorButton.style.backgroundColor = color.code;
  colorButton.onclick = () => {
    calculator.style.backgroundColor = color.code;
  };

  if (color.label === "Balta") {
    colorButton.style.border = "1px solid black";
    colorButton.onmouseover = () => {
      colorButton.style.backgroundColor = "grey";
    };
    colorButton.onmouseout = () => {
      colorButton.style.backgroundColor = color.code;
    };
  }

  colorButtons.appendChild(colorButton);
};

colorObjects.forEach(handleCreateColorButton);
