var canvas,
  ctx,
  prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  drawingFlag = false,
  lineWidth = 5,
  drawingColor = "green";

const init = () => {
  canvas = document.getElementById("canv");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx = canvas.getContext("2d");

  w = canvas.width;
  h = canvas.height;

  canvas.addEventListener(
    "mousemove",
    e => {
      findXY("move", e);
    },
    false
  );
  canvas.addEventListener(
    "mousedown",
    e => {
      findXY("down", e);
    },
    false
  );
  canvas.addEventListener(
    "mouseup",
    e => {
      findXY("up", e);
    },
    false
  );

  canvas.addEventListener(
    "touchmove",
    e => {
      findXY("move", e);
    },
    false
  );
  canvas.addEventListener(
    "touchstart",
    e => {
      findXY("down", e);
    },
    false
  );
  canvas.addEventListener(
    "touchend",
    e => {
      findXY("up", e);
    },
    false
  );
};

const setDrawingColor = obj => {
  lineWidth = 4
  switch (obj.id) {
    case "green":
      DrawingColor = "green";
      break;
    case "blue":
      drawingColor = "blue";
      break;
    case "red":
      drawingColor = "red";
      break;
    case "yellow":
      drawingColor = "yellow";
      break;
    case "orange":
      drawingColor = "orange";
      break;
    case "black":
      drawingColor = "black";
      lineWidth = 15
      break;
    case "white":
      drawingColor = "white";
      break;
  }
};

const drawLine = () => {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = drawingColor;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
  ctx.closePath();
};

const drawDot = () => {
  ctx.beginPath()
  ctx.fillStyle = drawingColor
  ctx.fillRect(currX, currY, 2, 2)
  ctx.closePath()
}

const findXY = (res, e) => {
  const updateCoords = () => {
    prevX = currX
    prevY = currY
    currX = e.clientX
    currY = e.clientY
  }

  switch (res) {
    case "down": {
      updateCoords()
      // drawDot()
      drawingFlag = true
            
      break
    }
    case "up": {
      drawingFlag = false
      break
    }
    case "move": {
      if (drawingFlag) {
        updateCoords()
        drawLine()
      }
      break
    }
  }
};
