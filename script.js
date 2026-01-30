let generalDiv = document.querySelector("#general-div");

for (let i = 0; i < (960 * 960) / (16 * 16); i++) {
  let block = document.createElement("div");
  block.setAttribute("id", "block");
  generalDiv.appendChild(block);
}

generalDiv.addEventListener("mousemove", (e) => {
  e.target.style.background = "blue";
});
