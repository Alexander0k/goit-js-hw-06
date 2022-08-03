const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createBtnEl: document.querySelector('[data-create]'),
  destroyBtnEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
};

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.createBtnEl.addEventListener('click', function createBoxes(amount) {
  amount = refs.inputEl.value;

  const arrNumbers = [];
  for (let i = 0; i < amount; i += 1) {
    const divBox = `<div>DivBox${i + 1}</div>`;
    arrNumbers.push(divBox);
  };

  const boxesMarkup = arrNumbers
    .map((arrNumber) => arrNumber)
    .join("");

  refs.boxesEl.innerHTML = boxesMarkup;
});

refs.destroyBtnEl.addEventListener('click', function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = "";
});