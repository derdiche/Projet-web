const curseur = document.getElementById("curseur");
const slider = document.getElementById("slider");
let y;
const deplacer = (e) => {
  //   console.log("je deplace ");
  curseur.style.top = `${e.clientY - y}px`;
  //   curseur.style.transform = `translateY(${e.clientY - y}px)`;
  requestAnimationFrame(deplacer);
};
curseur.addEventListener("mousedown", (e) => {
  console.log("je suis entrain dappuyer ");
  y = e.clientY - curseur.offsetTop;
  document.addEventListener("mousemove", deplacer);
});
document.addEventListener("mouseup", () => {
  console.log(curseur.style.top);
  document.removeEventListener("mousemove", deplacer);
});
requestAnimationFrame(deplacer);
