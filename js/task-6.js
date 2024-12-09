function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  input.value = "";
}
let size = 30;
function createBoxes(amount) {
  
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    // console.log(div);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
    // console.log(elements);
    elements.push(div);
  }

  boxesContainer.append(...elements);
  
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  size = 30;
});
