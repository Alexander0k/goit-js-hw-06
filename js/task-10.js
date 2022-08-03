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

refs.createBtnEl.addEventListener('click', () =>
  createBoxes(refs.inputEl.value));


 function createBoxes(amount) {
 const boxStart = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = boxStart + i * 10 + "px";
    boxEl.style.height = boxStart + i * 10 + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    refs.boxesEl.appendChild(boxEl);
  };

}

refs.destroyBtnEl.addEventListener('click', function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = "";
});


