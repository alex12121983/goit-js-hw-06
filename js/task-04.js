const counter = document.querySelector("#value");
let counterValue = 0;

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

const decrementClick = () => {
  if (counterValue === 0) {
    console.log("Counter is empty");
    return null;
  }
  counterValue -= 1;
  counter.textContent = counterValue;
  console.log(counterValue);
};

const incrementClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
  console.log(counterValue);
};

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);
