const resultTag = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".row button");
const colorButtons = document.querySelector(".color-buttons");
const calculator = document.querySelector(".calculator");

let result = 0;

for (let i = 0; i < numberButtons.length; i++) {
  const button = numberButtons[i];

  button.addEventListener("click", () => {
    const value = button.innerText;
    resultTag.innerText += value;
  });
}

const colors = ["white", "green", "blue", "red", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  const colorButton = document.createElement("button");

  colorButton.innerText = color;
  colorButton.style.backgroundColor = color;
  colorButton.onclick = () => {
    calculator.style.backgroundColor = color;
  };

  if (color === "white") {
    colorButton.style.border = "1px solid black";
    colorButton.onmouseover = () => {
      colorButton.style.backgroundColor = "grey";
    };
    colorButton.onmouseout = () => {
      colorButton.style.backgroundColor = color;
    };
  }

  colorButtons.appendChild(colorButton);
}
