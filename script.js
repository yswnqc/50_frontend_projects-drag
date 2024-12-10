const container = document.querySelector(".container");
const item = document.querySelector(".item");

const containerX = container.offsetLeft;
const containerY = container.offsetTop;
const containerx = container.offsetWidth;
const containery = container.offsetHeight;

let mouseX = 0;
let mouseY = 0;

const dragStart = (e) => {
  const itemx = e.target.offsetLeft;
  const itemy = e.target.offsetTop;
  const x = e.clientX;
  const y = e.clientY;
  mouseX = x - (containerX + itemx);
  mouseY = y - (containerY + itemy);
  setTimeout(() => (e.target.classList = "invisible"), 0);
};

const dragEnd = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  if (
    x < containerX ||
    y < containerY ||
    x > containerX + containerx ||
    y > containerY + containery
  ) {
  } else {
    const stopX = x - containerX - mouseX;
    const stopY = y - containerY - mouseY;
    item.style.top = `${stopY}px`;
    item.style.left = `${stopX}px`;
  }
  item.classList = "item";
};

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});
