const colorEl = document.querySelector(".color");
const btnChangeColorEl = document.querySelector(".change-color");

btnChangeColorEl.addEventListener("click", (event) => {
  document.body.style.background = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
