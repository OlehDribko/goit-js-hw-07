const textInput = document.querySelector("#name-input");
const nameUser = document.querySelector("#name-output");
console.log(nameUser);

textInput.addEventListener("input", (event) => {
  // console.log(nameUser.textContent.length);
  nameUser.textContent = event.currentTarget.value.trim();
  if (nameUser.textContent.length === 0) {
    nameUser.textContent = "Anonymous";
  }
});
