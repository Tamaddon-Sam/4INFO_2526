const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let score = 0;
let snake = [{ x: 200, y: 200 }];
let direction = "RIGHT";

let food = {
  x: Math.floor(Math.random() * 20) * box,
  y: Math.floor(Math.random() * 20) * box
};

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "lime";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  let headX = snake[0].x;
  let headY = snake[0].y;

  if (direction === "LEFT") headX -= box;
  if (direction === "UP") headY -= box;
  if (direction === "RIGHT") headX += box;
  if (direction === "DOWN") headY += box;

  // mangia cibo
  if (headX === food.x && headY === food.y) {
    score++;
    document.getElementById("score").innerText = score;
    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box
    };
  } else {
    snake.pop();
  }

  let newHead = { x: headX, y: headY };

  // collisione con se stesso (salta indice 0)
  for (let i = 1; i < snake.length; i++) {
    if (headX === snake[i].x && headY === snake[i].y) {
      alert("Game Over! Punteggio: " + score);
      snake = [{ x: 200, y: 200 }];
      score = 0;
      direction = "RIGHT";
      document.getElementById("score").innerText = score;
      return;
    }
  }

  // collisione con muri
  if (headX < 0 || headX >= canvas.width || headY < 0 || headY >= canvas.height) {
    alert("Game Over! Punteggio: " + score);
    snake = [{ x: 200, y: 200 }];
    score = 0;
    direction = "RIGHT";
    document.getElementById("score").innerText = score;
    return;
  }

  snake.unshift(newHead);
}

setInterval(draw, 70);
