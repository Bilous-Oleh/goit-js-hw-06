const formInputEl = document.querySelector(".login-form");

formInputEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const formData = new FormData(event.currentTarget);

  formData.forEach((name, value) => {
    console.log(name, value);
  });

  event.currentTarget.reset();
}
