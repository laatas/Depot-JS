// importation de la classe Game.js
import Game from './game.js';
import Mobile from './mobile.js';
import Saucer from './saucer.js';
import Shoot from './shoot.js';
// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("stars");
   const game = new Game(canvas);

   // Ajout des gestionnaires d'événements pour les boutons
   document.getElementById("nouvelleSoucoupe").addEventListener("click", () => {
        console.log("Bouton 'nouvelleSoucoupe' cliqué.");
        game.addSaucer(); // Ajoute une soucoupe lorsque le bouton est cliqué
    });
    // Gestionnaire pour la touche espace
   window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        console.log("Touche espace pressée.");
        const shoot = new Shoot(game.starShip.getX() + game.starShip.width, game.starShip.getY() + game.starShip.height / 2); // Crée un tir
        game.addShoot(shoot); // Ajoute le tir au jeu
    }
    });
    game.animate();
    
}

// Écouteur d'événements pour le chargement de la page
window.addEventListener("load", init);

//
console.log('le bundle a été généré');
