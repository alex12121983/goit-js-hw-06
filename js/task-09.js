function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCngColor = document.querySelector(".change-color");

const spnColor = document.querySelector(".color");

const bodyColor = document.body;

const cngColor = (event) => {
  let colorHex = getRandomHexColor();
  bodyColor.style.backgroundColor = colorHex;
  spnColor.textContent = colorHex;
};

btnCngColor.addEventListener("click", cngColor);
