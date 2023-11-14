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
    deplacecurseur();
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
