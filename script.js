let generalDiv = document.querySelector("#general-div");
let button = document.querySelector("#button");
let block = document.createElement("div");
block.setAttribute("id", "block");

button.addEventListener("click", () => {
  generalDiv.textContent = "";
  number = prompt("введи число от 1 до 100");
  if (number <= 100 && number >= 1) {
    let secondNumber = number * number;

    for (let i = 0; i < secondNumber; i++) {
      let block = document.createElement("div");
      block.setAttribute("id", "block");
      block.style.width = 960 / number + "px";
      block.style.height = 960 / number + "px";

      generalDiv.appendChild(block);
    }
  } else {
    let errorText = document.createElement("h1");
    errorText.getAttribute("id", "error-text");
    errorText.textContent = "Error";
    generalDiv.appendChild(errorText);
  }
});

generalDiv.addEventListener("mousemove", (e) => {
  rundomNumber = Math.floor(Math.random() * 256);
  secondRundomNumber = Math.floor(Math.random() * 256);
  thirdRundomNumber = Math.floor(Math.random() * 256);
  let color = `rgb(${rundomNumber},${secondRundomNumber}, ${thirdRundomNumber})`;
  e.target.style.background = color;
});
