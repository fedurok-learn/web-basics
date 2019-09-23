let getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let onKeyPressHandler = () => {
  var divs = document.getElementsByTagName("div"), i=divs.length;
  while (i--) {
    divs[i].setAttribute("style", "background-color: " + getRandomColor() + ";");
  } 
}

let createContainer = (parent) => {
  let container = document.createElement("div");
  container.className = "container";

  let properties = "width: 75%; height: 75%; display:flex; justify-content:center; align-items:center;";
  container.style.cssText = properties;

  parent.appendChild(container);
  return container;
}

let createNContainers = (n, parent = document.body) => {
  let container = parent;
  while(n--) {
    container = createContainer(container);
  }
}

// console.log(document.getElementById("whole-page"))
createNContainers(10, document.getElementById("whole-page"));
window.addEventListener("keydown", onKeyPressHandler, true);
