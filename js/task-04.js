const valueSpan = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


let counterValue = 0;

function updateCounterValue() {
    valueSpan.textContent = counterValue;
  }

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterValue();
  });

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateCounterValue();
  });
