console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const buttonToggle = document.querySelector('[data-js="toggle-button"]');
console.log(buttonToggle);

buttonToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("button--toggle");
  });