const textInput = document.querySelector("#validation-input");

const isValidate = (event) => {
  textInput.classList.remove("invalid");
  textInput.classList.remove("valid");
  if (textInput.value.length === Number(textInput.dataset.length)) {
    return textInput.classList.add("valid");
  }
  return textInput.classList.add("invalid");
};

textInput.addEventListener("blur", isValidate);
