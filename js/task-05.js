const nameOutput = document.querySelector("#name-output");

const nameInput = document.querySelector("#name-input");

const showName = (event) => {
  if( nameInput.value === "" ) {
    return nameOutput.textContent = "Anonymous";
  };
  nameOutput.textContent = event.currentTarget.value;
};

nameInput.addEventListener("input", showName);
