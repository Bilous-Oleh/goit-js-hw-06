const inputEl = document.querySelector("#validation-input");
const inputDatasetLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", handleElementInput);

function handleElementInput() {
  if (inputEl.value.length === inputDatasetLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
