const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameOutput = document.addEventListener('input', () => {
    const name = nameInput.value.trim();
    if (name === '') {
        nameOutput.textContent = 'Anonymus';
    } else {
        nameOutput.textContent = name;
    }
});