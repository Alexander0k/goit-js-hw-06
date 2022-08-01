const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onBlurChange);

function onBlurChange(event) {

    if (inputEl.classList.contains('valid')) {
        inputEl.classList.remove('valid');
    };

    if (inputEl.classList.contains('invalid')) {
        inputEl.classList.remove('invalid');
    };

    event.currentTarget.value.length === dataLength
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid');
};