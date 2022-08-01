const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const handleInput = () => {
  inputText.style.fontSize = `${inputRange.value}px`;
};

inputRange.addEventListener("input", handleInput);