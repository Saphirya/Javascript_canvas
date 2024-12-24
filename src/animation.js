const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rayon = canvas.height / 2;
ctx.translate(rayon, rayon);
setInterval(drawClock, 1000);

function drawClock() {
  drawFace();
  drawHours();
  drawMinutes();
  drawTime();
}

function drawFace() {
  ctx.beginPath();
  ctx.arc(0, 0, rayon * 0.9, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 4;
  ctx.stroke();
}

function drawHours() {
  ctx.font = "40px arial";
  ctx.fillStyle = "black";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (let heures = 1; heures < 13; heures++) {
    ctx.save();
    const angle = (heures * Math.PI) / 6;
    ctx.rotate(angle);
    ctx.translate(0, -rayon * 0.75);
    ctx.rotate(-angle);
    ctx.fillText(heures.toString(), 0, 0);
    ctx.restore();
  }
}

function drawMinutes() {
  ctx.save();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.lineCap = "butt";
  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    ctx.moveTo(rayon * 0.9 - 1, 0);
    if (i % 5 !== 0) {
      ctx.lineTo(rayon * 0.9 - 1 - 10, 0);
    } else {
      ctx.lineTo(rayon * 0.9 - 1 - 20, 0);
    }
    ctx.stroke();
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();
}

function drawTime() {
  const now = new Date();
  let heures = now.getHours();
  let minutes = now.getMinutes();
  let secondes = now.getSeconds();
  ctx.strokeStyle = "black";
  ctx.lineCap = "round";
  drawHoursHand(heures, minutes, secondes);
  drawMinutesHand(minutes, secondes);
  drawSecondesHand(secondes);
}

function drawHoursHand(heures, minutes) {
  ctx.save();
  ctx.rotate((heures % 12) * (Math.PI / 6) + (minutes * Math.PI) / 360);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(0, -0.3 * rayon);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}

function drawMinutesHand(minutes, secondes) {
  ctx.save();
  ctx.rotate((minutes * Math.PI) / 30 + (secondes * Math.PI) / 1800);
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(0, -0.8 * rayon);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}

function drawSecondesHand(secondes) {
  ctx.save();
  ctx.strokeStyle = "red";
  ctx.rotate((secondes * Math.PI) / 30);
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(0, -0.8 * rayon);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}
