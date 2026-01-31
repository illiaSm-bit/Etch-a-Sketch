let generalDiv = document.querySelector("#general-div");
let button = document.querySelector("#button");
let block = document.createElement("div");
block.setAttribute("id", "block");

button.addEventListener("click", () => {
  generalDiv.textContent = "";
  number = prompt("введи число от 1 до 100");
  let secondNumber = number * number;

  for (let i = 0; i < secondNumber; i++) {
    let block = document.createElement("div");
    block.setAttribute("id", "block");
    block.style.width = 960 / number + "px";
    block.style.height = 960 / number + "px";

    generalDiv.appendChild(block);
  }
});

generalDiv.addEventListener("mousemove", (e) => {
  e.target.style.background = "blue";
});
