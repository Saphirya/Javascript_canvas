const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const color = document.getElementById("color");

const img = new Image();
img.crossOrigin = "anonymous";
img.onload = () => {
  ctx.drawImage(img, 60, 60, img.naturalWidth * 2, img.naturalHeight * 2);
};
img.src =
  "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

function pick(event) {
  const x = event.clientX;
  const y = event.clientY;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;
  const rgba =
    "rgba(" +
    data[0] +
    ", " +
    data[1] +
    ", " +
    data[2] +
    ", " +
    data[3] / 255 +
    ")";
  color.style.background = rgba;
  color.firstChild.textContent = rgba;
}
canvas.addEventListener("click", pick);
