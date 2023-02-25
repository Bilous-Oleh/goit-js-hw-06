const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  if (nameInputEl.value !== "") {
    nameOutputEl.textContent = event.target.value;

    return;
  }
  nameOutputEl.textContent = "Anonymous";
});
