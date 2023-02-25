let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanCounter = document.querySelector("#value");
// console.log(btnIncrement.dataset);

btnDecrement.addEventListener("click", onDecrementCounter);
btnIncrement.addEventListener("click", onIncrementCounter);

function onDecrementCounter() {
  counterValue -= 1;
  spanCounter.textContent = counterValue;
}

function onIncrementCounter() {
  counterValue += 1;
  spanCounter.textContent = counterValue;
}
