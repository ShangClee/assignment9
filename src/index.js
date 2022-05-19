const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
const body = document.body;
const button = document.getElementById("ibutton");
let intervalID = null;

function changeBackground() {
  const length = colors.length;
  const color1 = Math.floor(Math.random() * length);
  const color2 = Math.floor(Math.random() * length);
  body.style.background = `linear-gradient(45deg, ${colors[color1]}, ${colors[color2]})`;
}

function intervalOnOff() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  } else {
    intervalID = setInterval(changeBackground, 1000);
  }
}

// body.addEventListener("click", intervalOnOff);
button.addEventListener("click", intervalOnOff);
