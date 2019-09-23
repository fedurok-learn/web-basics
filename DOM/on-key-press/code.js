const divs_num = 100

let getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colors = Array(divs_num).fill(null).map(() => getRandomColor())
const default_interval = 5;

let colorChangeHandler = () => {
  colors.unshift(getRandomColor());
  colors.pop();
  var divs = document.getElementsByTagName("div"), i=divs.length;
  while (i--) {
    divs[i].setAttribute("style", "background-color: " + colors[i] + ";");
  } 
}

let createContainer = (parent) => {
  let container = document.createElement("div");
  container.classList.add("container")

  parent.appendChild(container);
  return container;
}

let createNContainers = (n, parent = document.body) => {
  let container = parent;
  while(n--) {
    container = createContainer(container);
  }
}

let whole_page = document.getElementById("whole-page"); 
createNContainers(divs_num, whole_page)

let interval = undefined;
let blink = () => interval = interval ? clearInterval(interval) : setInterval(colorChangeHandler, default_interval)
window.addEventListener("pointerdown",  blink, false)
window.addEventListener("keydown",  blink, false)
