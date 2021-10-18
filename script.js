const grid = document.querySelector(".grid");
let gridSize = 16;
let gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

function createGridItems() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  for (let i = 1; i <= gridSize * gridSize; i++) {
    grid
      .appendChild(gridItem.cloneNode(true))
      .addEventListener("mouseover", function changeBg(e) {
        e.target.style.backgroundColor = "#000000";
      });
  }
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
  );
}

createGridItems();

const changeGridBtn = document.querySelector("#change-grid-btn");

changeGridBtn.addEventListener("click", () => {
  gridSize = +prompt("Enter the number of squares per side you want");
  if (typeof gridSize === "number" && gridSize > 0 && gridSize < 100) {
    createGridItems();
  }
});

const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", () => {
  [...document.querySelectorAll(".grid-item")].forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
});

const crazyBtn = document.querySelector("#crazy-btn");
let crazyToggled = false;

crazyBtn.addEventListener("click", () => {
  if (!crazyToggled) {
    [...document.querySelectorAll(".grid-item")].forEach((item) => {
      item.removeEventListener("mouseover", function changeBg(e) {
        e.target.style.backgroundColor = "#000000";
      });
      item.addEventListener("mouseover", function changeBgCrazy(e) {
        e.target.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
    });
    crazyToggled = true;
  } else {
    [...document.querySelectorAll(".grid-item")].forEach((item) => {
      item.removeEventListener("mouseover", function changeBgCrazy(e) {
        e.target.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
      item.addEventListener("mouseover", function changeBg(e) {
        e.target.style.backgroundColor = "#000000";
      });
    });
    crazyToggled = false;
  }
});
