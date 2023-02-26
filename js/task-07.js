const fontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeEl.addEventListener("input", handleClick);

function handleClick(event) {
  textEl.style.fontSize = event.target.value + "px";
}
