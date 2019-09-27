var canvas = document.getElementById("AtariGame")
var ctx = canvas.getContext("2d")

//////////////////////////////////////////////////
// Ball
//////////////////////////////////////////////////

var x = canvas.width / 2, y = canvas.height - 30
var dx = 2, dy = 2
const ballRadius = 10;

var shouldBounce = () => {
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
}
var drawBall = () => {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, 2 * Math.PI)
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

//////////////////////////////////////////////////
// Paddle
//////////////////////////////////////////////////

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;

var drawPaddle = () => {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

//////////////////////////////////////////////////
// Draw
//////////////////////////////////////////////////

var draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  shouldBounce()
  drawBall()

  drawPaddle()

  x += dx
  y += dy
}

setInterval(draw, 10)


