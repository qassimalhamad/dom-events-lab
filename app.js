/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");
/*-------------------------------- Variables --------------------------------*/
/*------------------------ Cached Element References ------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let number = event.target.textContent;
    if (number !== "=" && number !== "C") {
      if (display.textContent == "" && display.textContent == true) {
      } else {
        display.textContent += number;
      }
    }
    if (number == "C") {
        display.textContent = "";
      }
    if (number == "=" && number !== "C") {
      display.textContent = eval(display.textContent);
    }

  });
});
