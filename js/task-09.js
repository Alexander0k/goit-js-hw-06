
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  color: document.querySelector('.color'),
  changeBtn: document.querySelector('.change-color')
}

refs.changeBtn.addEventListener('click', onClickChangeColor)

function onClickChangeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = refs.body.style.backgroundColor;
}
