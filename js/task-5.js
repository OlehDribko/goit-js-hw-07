function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const main = document.querySelector("body");
const handleClick = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

handleClick.addEventListener("click", () => {
  const getNewColor = getRandomHexColor();
  main.style.backgroundColor = getNewColor;
  colorName.textContent = getNewColor;
});
