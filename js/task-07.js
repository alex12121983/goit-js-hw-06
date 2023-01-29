const inputRange = document.querySelector("#font-size-control");
const spanFontSize = document.querySelector("#text");

const chgFontSize = (event) => {
  spanFontSize.style.fontSize = inputRange.value + "px";
};

inputRange.addEventListener("input", chgFontSize);
