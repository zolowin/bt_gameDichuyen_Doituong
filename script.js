function Saitama(x, y, img) {
  this.x = x;
  this.y = y;
  this.imageObj = img;
  this.distance = 2;
  this.direction = 3;

  this.drawImg = function (ctx) {
    ctx.drawImage(this.imageObj, this.x, this.y, 50, 50);
  }
  this.moveDown = function () {
    this.y += this.distance;
  }
  this.moveUp = function () {
    this.y -= this.distance;
  }
  this.moveRight = function () {
    this.x += this.distance;
  }
  this.moveLeft = function () {
    this.x -= this.distance;
  }
}

let myCanvas = document.getElementById('myCanvas');
let myImage = document.getElementById('saihoi');
let ctx = myCanvas.getContext('2d');
let imageObj = new Image();
imageObj.src = myImage.src;
let sai1 = new Saitama(30, 30, imageObj);

window.onload = function () {
  updateSai();
}

document.addEventListener('keyup', move);
const MOVERIGHT = 39,
  MOVEDOWN = 40,
  MOVELEFT = 37,
  MOVEUP = 38,
  SHIFTLEFT = 16,
  SPACE = 32;

function move(e) {
  switch (e.keyCode) {
    case MOVEDOWN:
      sai1.direction = 4;
      break;
    case MOVERIGHT:
      sai1.direction = 3;
      break;
    case MOVEUP:
      sai1.direction = 2;
      break;
    case MOVELEFT:
      sai1.direction = 1;
      break;
    case SHIFTLEFT:
      sai1.distance =4;
      break;
    case SPACE:
      sai1.distance = 2;
      break;
  }
}

function updateSai() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  sai1.drawImg(ctx);

  if (sai1.direction == 4) sai1.moveDown();
  if (sai1.direction == 3) sai1.moveRight();
  if (sai1.direction == 2) sai1.moveUp();
  if (sai1.direction == 1) sai1.moveLeft();

  requestAnimationFrame(updateSai, 1000)
}


