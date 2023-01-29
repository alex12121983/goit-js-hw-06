const textInput = document.querySelector("#validation-input");

const isValidate = (event) => {
  if (textInput.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    return textInput.classList.add("valid");
  }
  return textInput.classList.add("invalid");
};

textInput.addEventListener("blur", isValidate);
