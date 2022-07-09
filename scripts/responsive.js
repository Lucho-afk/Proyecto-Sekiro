const button = document.querySelector("#burguer");
const menu = document.querySelector(".menu");
console.log({ menu });
button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
