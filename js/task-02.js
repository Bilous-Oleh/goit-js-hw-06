const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const siteNavEl = document.querySelector("#ingredients");
const arrayItems = [];

ingredients.forEach((ingredient) => {
  const navItemEl = document.createElement("li");

  navItemEl.classList.add("item");
  navItemEl.textContent = ingredient;

  arrayItems.push(navItemEl);
});

siteNavEl.append(...arrayItems);
