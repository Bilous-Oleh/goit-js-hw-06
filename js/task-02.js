const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const siteNavEl = document.querySelector("#ingredients");
console.log(siteNavEl);

ingredients.forEach((element) => {
  const navItemEl = document.createElement("li");
  console.log(navItemEl);

  navItemEl.classList.add("site-nav__item");
  navItemEl.textContent = element;

  siteNavEl.append(navItemEl);
});
