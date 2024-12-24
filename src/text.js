import "./style.scss";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = " italic 60px Arial";
ctx.fillStyle = "red";
ctx.lineWidth = 1;
ctx.fillText("Hello World", 300, 400);

ctx.strokeText("Hello World", 300, 400);
const mesure = ctx.measureText("Hello World");
console.log(mesure);
