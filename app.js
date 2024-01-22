
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const box = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    color: "green",
    speed: 5,
  };

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    box.x += box.speed;
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.width, box.height);

    requestAnimationFrame(update);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      box.speed = Math.abs(box.speed);
    } else if (e.key === "ArrowLeft") {
      box.speed = -Math.abs(box.speed);
    }
  });

  window.addEventListener("keyup,", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      box.speed = 0;
    }
  });

  update();

