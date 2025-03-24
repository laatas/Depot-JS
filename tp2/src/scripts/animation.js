import Ball from './ball';
import Obstacle from './obstacle';

/* TYPE Animation */
export default class Animation {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d'); // Contexte de rendu 2D
    this.balls = []; // Tableau de balles initialement vide
    this.obstacles = []; // Tableau pour stocker les obstacles
    this.animationRequest = null; // Requête d'animation
    
    // Exemple d'ajout d'un obstacle
    this.obstacles.push(new Obstacle(200, 150, 100, 20)); // Crée un obstacle
  }
  alea(n){
    return Math.floor(Math.random()*n);
  }
  addBall() {
    const x = this.alea(this.canvas.width - Ball.BALL_WIDTH);
    const y = this.alea(this.canvas.height - Ball.BALL_WIDTH);
    let deltaX, deltaY;
    
    // Générer des valeurs de vitesse non nulles
    do {
      deltaX = this.alea(11) - 5; // Valeur entre -5 et 5
      deltaY = this.alea(11) - 5;
    } while (deltaX === 0 && deltaY === 0); // Éviter une balle immobile

    const newBall = new Ball(x, y);
    newBall.deltaX = deltaX;
    newBall.deltaY = deltaY;

    this.balls.push(newBall); // Ajoute la nouvelle balle au tableau
  }
    /* Méthode qui anime toutes les balles */
    animate = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Nettoie le canvas
  
      // Dessiner les obstacles
      this.obstacles.forEach(obstacle => {
        obstacle.draw(this.context);
      });
  
      // Vérifier les collisions
      this.checkCollisions();
  
      this.balls.forEach(ball => {
        ball.move(this.canvas);  // Déplace la balle
        ball.draw(this.context); // Dessine la balle
      });
  
      this.animationRequest = requestAnimationFrame(this.animate);
    }

  /* start the animation or stop it if previously running */
  startAndStop() {
    if (this.animationRequest) {
      cancelAnimationFrame(this.animationRequest);
      this.animationRequest = null;
    } else {
      this.animate();
    }
  }

  checkCollisions() {
    this.balls.forEach(ball => {
      this.obstacles.forEach(obstacle => {
        if (ball.collisionWith(obstacle)) {
          // Collision détectée, inversez la direction de la balle
          ball.deltaX = -ball.deltaX;
          ball.deltaY = -ball.deltaY;
        }
      });
    });
  }
}
