// Mouse events
const mousemove = document.querySelector(".mousemove");
const puce1 = document.querySelector(".puce-1");
const puce2 = document.querySelector(".puce-2");
const puce3 = document.querySelector(".puce-3");

// Déplace l'effet avec le curseur
window.addEventListener("mousemove", (event) => {
  mousemove.style.left = event.pageX + "px";
  mousemove.style.top = event.pageY + "px";
});

// Quand la scale est à 2, augmente de 25% la taille
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  puce3.style.border = "solid grey 3px";
  puce1.style.color = "black";
});

// Quand la scale est à 1 redevient à -50%
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "4px solid black";
  puce2.style.background = "rgba(207, 207, 0, 0.959)";
});
