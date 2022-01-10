const resultTag = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".row button");

let result = 0;

for (let i = 0; i < numberButtons.length; i++) {
  const button = numberButtons[i];

  button.addEventListener("click", () => {
    const value = button.innerText;
    resultTag.innerText += value;
  });
}
