const listOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach((categorie) => {
  console.log(`Category: ${categorie.firstElementChild.textContent}`);
  console.log(`Elements: ${categorie.lastElementChild.children.length}`);
});