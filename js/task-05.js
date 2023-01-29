const nameOutput = document.querySelector("#name-output");

const nameInput = document.querySelector("#name-input");

const showName = (event) => {
  nameOutput.textContent = event.currentTarget.value;
};

const showAnonymous = (event) => {
  nameOutput.textContent = "Anonymous";
};

nameInput.addEventListener("input", showName);
nameInput.addEventListener("blur", showAnonymous);
