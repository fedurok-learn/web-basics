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
  canvas.width = window.innerWidth;
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

  // Set up touch events for mobile, etc
  canvas.addEventListener(
    "touchstart",
    function(e) {
      mousePos = getTouchPos(canvas, e);
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);
    },
    false
  );
  canvas.addEventListener(
    "touchend",
    function(e) {
      var mouseEvent = new MouseEvent("mouseup", {});
      canvas.dispatchEvent(mouseEvent);
    },
    false
  );
  canvas.addEventListener(
    "touchmove",
    function(e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);
    },
    false
  );

  // Get the position of a touch relative to the canvas
  function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }
};

const setDrawingColor = obj => {
  lineWidth = 4;
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
      lineWidth = 15;
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
  ctx.beginPath();
  ctx.fillStyle = drawingColor;
  ctx.fillRect(currX, currY, 2, 2);
  ctx.closePath();
};

const findXY = (res, e) => {
  const updateCoords = () => {
    prevX = currX;
    prevY = currY;
    currX = e.clientX;
    currY = e.clientY;
  };

  switch (res) {
    case "down": {
      updateCoords();
      // drawDot()
      drawingFlag = true;

      break;
    }
    case "up": {
      drawingFlag = false;
      break;
    }
    case "move": {
      if (drawingFlag) {
        updateCoords();
        drawLine();
      }
      break;
    }
  }
};
