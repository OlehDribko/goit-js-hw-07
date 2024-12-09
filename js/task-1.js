const elemetHead = document.querySelectorAll("#categories .item");
const elementOflist = document.querySelectorAll(".item");
const elementTitle = document.querySelectorAll("h2");

console.log(`Number of categories: ${elementOflist.length}`);
// console.log(elemetHead);

elemetHead.forEach((item) => {
  const title = item.querySelector("h2");
  const categoriElements = item.querySelectorAll("li");
  // console.log(item);
  console.log(`Categori ${title.textContent}`);
  console.log(`Elements ${categoriElements.length}`);
});
