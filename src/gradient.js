import "./style.scss";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.rect(200, 200, 400, 400);
// const gradient = ctx.createLinearGradient(200, 200, 600, 600);
// gradient.addColorStop(0, "red");
// gradient.addColorStop(0.5, "teal");
// gradient.addColorStop(1, "blue");
ctx.rect(0, 0, 800, 800);

const gradient = ctx.createRadialGradient(400, 400, 100, 400, 400, 400);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "yellow");
ctx.fillStyle = gradient;
ctx.fill();
