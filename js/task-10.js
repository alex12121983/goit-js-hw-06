function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  let arr = [];
  arr.length = Number(amount);
  arr.fill("");
  arr.map((value, index) => {
    arr.forEach((el) => {
      value = document.createElement("div");
      value.style.width = 30 + index * 10 + "px";
      value.style.height = 30 + index * 10 + "px";
      value.style.backgroundColor = getRandomHexColor();
    });
    arr.push(value);
  });
  return divToAppend.append(...arr);
};

const getAmount = (event) => {
  return createBoxes(inputNumber.value);
};

const destroyBoxes = (event) => {
  divToAppend.innerHTML = "";
  inputNumber.value = "";
};

const inputNumber = document.querySelector('#controls input[type="number"]');
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const divToAppend = document.querySelector("#boxes");

btnCreate.addEventListener("click", getAmount);
btnDestroy.addEventListener("click", destroyBoxes);
