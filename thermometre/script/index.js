function affiche(texte) {
  console.log(texte);
}
/********************************************************/
/*                    Initalisation                     */
/********************************************************/
const tube = document.getElementById("tube");
const curseur = document.getElementById("cercle");
const pointeur = document.getElementById("pointeur");
const degre = document.getElementById("degre");
const curseurValu = {
  haut: parseInt(tube.getAttribute("y")), //150
  bas: parseInt(curseur.getAttribute("cy")), //540
};

/********************************************************/
/*                       curseur                        */
/********************************************************/
curseur.addEventListener("mousedown", () => {
  affiche("appuis");
  affiche(curseur.getAttribute("cx"));
  // curseur.setAttribute("cy", curseurValu.haut);
  document.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", () => {
  affiche("retire");
  document.removeEventListener("mousemove", onDrag);
});
function onDrag({ movementY }) {
  // affiche("deplace");
  let valeur = parseInt(curseur.getAttribute("cy")) + movementY;
  if (valeur >= curseurValu.haut && valeur <= curseurValu.bas) {
    curseur.setAttribute("cy", valeur);
    degre.setAttribute("y", valeur + 10);
    var pourcentage =
      100 -
      parseInt(
        ((valeur - curseurValu.haut) * 100) /
          (curseurValu.bas - curseurValu.haut)
      );
    degre.textContent = pourcentage + "°";
    setTimeout(() => {
      pointeur.setAttribute(
        "transform",
        "translate(0," +
          (pourcentage * (curseurValu.bas - curseurValu.haut)) / -100 +
          ")"
      );
    }, 20);

    affiche("mettre a jour la hauteur des vagues");
    affiche("mettre a jour le pointeur");
  }
}
