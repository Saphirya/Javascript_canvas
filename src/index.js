import img from "../public/images/earth.jpg";
import "./style.scss";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = img;
image.onload = () => {
  ctx.drawImage(image, 400, 400, 300, 300);
};

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
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.quadraticCurveTo(250, 100, 300, 200);
// ctx.quadraticCurveTo(400, 250, 300, 300);
// ctx.quadraticCurveTo(250, 400, 200, 300);
// ctx.quadraticCurveTo(100, 250, 200, 200);
// ctx.lineWidth = 5;
// ctx.fillStyle = "#74b9ff";
// ctx.fill();
// ctx.strokeStyle = "#0984e3";
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "#e17055";
// ctx.rect(250, 500, 200, 100);
// ctx.fill();
// ctx.closePath();

// Nous commençons un nouveau parcours
// ctx.beginPath();
// Les deux premiers arguments sont les coordonnées du centre
// du canvas (500/2, 500/2) pour le centre du cercle. Le troisième argument
// est le rayon. Voir plus bas pour les angles.
// ctx.arc(250, 250, 240, (1 / 4) * Math.PI, (7 / 4) * Math.PI);
// Nous traçons une première ligne entre le point de fin du tracé du cercle
// et le centre du cercle :
// ctx.lineTo(250, 250);
// Nous utilisons closePath pour fermer la figure et donc le corps de Pacman :
// ctx.closePath();

// Nous remplissons en jaune la figure :
// ctx.fillStyle = "yellow";
// ctx.fill();
// Pour le tracé de l’arc de cercle et des lignes on le fait en noir :
// ctx.strokeStyle = "black";
// ctx.stroke();

// Ensuite on passe à l’oeil, on commence donc un nouveau parcours :
// ctx.beginPath();
// On part de la moitié du canvas pour l’axe x et la moitié du rayon pour
// l’axe y pour que le cercle soit bien centré :
// ctx.arc(250, 120, 20, 0, 2 * Math.PI);
// On remplit le cercle de noir :
// ctx.fillStyle = "black";
// ctx.fill();
