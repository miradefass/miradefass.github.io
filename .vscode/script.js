const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
  stars.push({
    x: e.clientX,
    y: e.clientY,
    size: Math.random() * 6 + 4,
    alpha: 1,
    life: 30,
  });
});

function drawStar(x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(-size, 0);
  ctx.lineTo(size, 0);
  ctx.moveTo(0, -size);
  ctx.lineTo(0, size);
  ctx.stroke();

  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star, i) => {
    star.alpha -= 0.03;
    star.life--;

    drawStar(star.x, star.y, star.size, star.alpha);

    if (star.life <= 0) {
      stars.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();
