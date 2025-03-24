import Ball from './ball';           // peut être commenté après la Ex1 Q2 faite
import AnimationWithObstacle from './animationWithObstacle';
import Obstacle from './obstacle';

import './assets/style/style-balles.css';



/* setup */
const init = () => {
  const addBall = document.getElementById("addBall");
  const canvas = document.getElementById("terrain");

  // commenter les 2 lignes suivantes après la Ex1 Q2
  //const ball = new Ball(50,50);
  //document.getElementById("stopStartBall").addEventListener("click", () => ball.draw(canvas.getContext('2d'))  );

  // décommenter les deux lignes suivantes à partir la question Ex1 Q4
  const obstacle = new Obstacle(200, 150, 100, 20);
  const animation = new AnimationWithObstacle(canvas, obstacle);
  document.getElementById("stopStartBall").addEventListener("click", () => animation.startAndStop()  );
  // Ajout de la gestion du clic sur #addBall
  addBall.addEventListener("click", () => {
    animation.addBall(); // Appelle la méthode pour ajouter une balle
    animation.animate(); // Démarre l'animation si elle n'est pas déjà en cours
    console.log("balle ajoutée");
  });
  //
}

window.addEventListener("DOMContentLoaded",init);


//
console.log('le bundle a été généré');
