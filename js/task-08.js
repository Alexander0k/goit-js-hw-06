const refs = {
    formInputEl: document.querySelector('.login-form'),
    inputEmailEl: document.querySelector('input[name = email]'),
    passwordInputEl: document.querySelector('input[name = password]'),
    // btnInputEl: document.querySelector('[type = submit]')
}
let objElements = {};
refs.formInputEl.addEventListener('submit', onFormSubmit)



function onFormSubmit(event) {
    event.preventDefault();
    if (refs.inputEmailEl.value.length !== 0 && refs.passwordInputEl.value.length !== 0) {
         const formData = new FormData(event.currentTarget)
    formData.forEach((inputValue, inputName) => {
        objElements[inputName] = inputValue;
    })
        console.log(objElements)
        refs.formInputEl.reset()
    } else {
        alert('Всі поля повинні бути заповнені')
    }

}