import "./style.scss";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 400);
ctx.arcTo(500, 500, 400, 600, 50);
ctx.lineTo(300, 700);

ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
ctx.closePath();
ctx.fill();
ctx.stroke();
