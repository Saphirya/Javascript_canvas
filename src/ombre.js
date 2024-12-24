const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Sans blur
let x = 0;
let y = 0;
for (let i = 0; i < 22; i++) {
  if (i > 0 && i % 11 === 0) {
    y++;
    x = 0;
  }
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.fillStyle = "black";
  ctx.fillText(`${i}/${i}`, x * 50 + 30, y * 50 + 48);
  ctx.shadowColor = "black";
  ctx.shadowOffsetX = i;
  ctx.shadowOffsetY = i;
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(x * 50 + 30, y * 50 + 50, 30 - 2, 30 - 2);
  x++;
}

// Avec blur
x = 0;
y = 0;
for (let i = 0; i < 22; i++) {
  if (i > 0 && i % 11 === 0) {
    y++;
    x = 0;
  }
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.fillStyle = "black";
  ctx.fillText(`${i}/${i}`, x * 50 + 30, y * 50 + 198);
  ctx.shadowColor = "black";
  ctx.shadowOffsetX = i;
  ctx.shadowOffsetY = i;
  ctx.shadowBlur = i;
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(x * 50 + 30, y * 50 + 200, 30 - 2, 30 - 2);
  x++;
}

// Négatifs et opacité croissante avec rgba()
x = 0;
y = 0;
for (let i = 0; i < 22; i++) {
  if (i > 0 && i % 11 === 0) {
    y++;
    x = 0;
  }
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.fillStyle = "black";
  ctx.fillText(`${-i}/${-i}`, x * 50 + 30, y * 70 + 438);
  ctx.shadowColor = "black";
  ctx.shadowOffsetX = -i;
  ctx.shadowOffsetY = -i;
  ctx.fillStyle = `rgba(0, 149, 221,${i * 0.03 + 0.3})`;
  ctx.fillRect(x * 50 + 30, y * 70 + 400, 30 - 2, 30 - 2);
  x++;
}
