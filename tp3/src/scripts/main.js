// importation de la classe Game.js
import Game from './game.js';
import Mobile from './mobile.js';
import Saucer from './saucer.js';

// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("stars");
   const game = new Game(canvas);

   // Ajout des gestionnaires d'événements pour les boutons
   document.getElementById("nouvelleSoucoupe").addEventListener("click", () => {
        console.log("Bouton 'nouvelleSoucoupe' cliqué.");
        game.addSaucer(); // Ajoute une soucoupe lorsque le bouton est cliqué
    });
    document.getElementById("score").addEventListener("click", () => {
        console.log("Bouton 'score' cliqué.");
        game.updateScore(10); // Ajoute 10 points au score
    });
    game.animate();
    
}

// Écouteur d'événements pour le chargement de la page
window.addEventListener("load", init);

//
console.log('le bundle a été généré');
