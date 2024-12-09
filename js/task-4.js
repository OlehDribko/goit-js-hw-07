const form = document.querySelector("form");
const arrValueForm = {};

console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(form.elements["email"].value.trim());
  const email = form.elements["email"].value.trim();
  const password = form.elements["password"].value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  form.reset();
});
console.log(arrValueForm);
