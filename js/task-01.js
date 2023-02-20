const categories = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${categories.length}`);

categories.forEach((element) => {
  const TitleEl = element.firstElementChild;
  const numberOfElements = element.lastElementChild.children.length;

  console.log(`Category: ${TitleEl.textContent}`);
  console.log(`Elements: ${numberOfElements}`);
});
