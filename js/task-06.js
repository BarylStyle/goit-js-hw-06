const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
    const length = input.value.length;
    const requiredLength = input.getAttribute('data-length');
    if (length === parseInt(requiredLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});