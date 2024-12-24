import "./style.scss";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(400, 400);
// ctx.arcTo(500, 500, 400, 600, 50);
// ctx.lineTo(300, 700);

// ctx.lineWidth = 5;
// ctx.strokeStyle = "red";
// ctx.lineCap = "round";
// ctx.lineJoin = "round";
// ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(400, 400, 300, 0, Math.PI, true);
// ctx.closePath();
// ctx.stroke();

//courbe de bezier
// ctx.beginPath();
// ctx.moveTo(300, 300);
// ctx.bezierCurveTo(500, 400, 200, 600, 400, 700);
// ctx.moveTo(300, 300);

//quadratique
// ctx.quadraticCurveTo(600, 600, 400, 700);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();

//nuage
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.quadraticCurveTo(250, 100, 300, 200);
ctx.quadraticCurveTo(400, 250, 300, 300);
ctx.quadraticCurveTo(250, 400, 200, 300);
ctx.quadraticCurveTo(100, 250, 200, 200);
ctx.lineWidth = 5;
ctx.fillStyle = "#74b9ff";
ctx.fill();
ctx.strokeStyle = "#0984e3";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#e17055";
ctx.rect(250, 500, 200, 100);
ctx.fill();
