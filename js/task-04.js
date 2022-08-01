const button = {
 incrementBtn: document.querySelector('[data-action="increment"]'),
decrementBtn: document.querySelector('[data-action="decrement"]'),
 valueEl: document.querySelector('#value'),
}
let counterValue = 0;
button.incrementBtn.addEventListener('click', function () {
    counterValue += 1
    button.valueEl.textContent = counterValue;
})
button.decrementBtn.addEventListener('click', function () {
    counterValue -= 1
    button.valueEl.textContent = counterValue;
})