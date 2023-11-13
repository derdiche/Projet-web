function affiche(texte) {
  console.log(texte);
}
/********************************************************/
/*                    Initalisation                     */
/********************************************************/
const tube = document.getElementById("tube");
const curseur = document.getElementById("cercle");
const curseurValu = {
  haut: parseInt(tube.getAttribute("y")),
  bas: parseInt(curseur.getAttribute("cy")),
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
  }

  affiche(parseInt(curseur.getAttribute("cy")));
}
