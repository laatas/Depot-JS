import Animation from './animation';
import Obstacle from './obstacle';

export default class AnimationWithObstacle extends Animation {
  constructor(canvas, obstacle) {
    super(canvas); // Appelle le constructeur de la classe parente
    this.obstacle = obstacle; // Ajoute l'obstacle comme attribut
  }

  /* Méthode qui anime toutes les balles */
  animate = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Nettoie le canvas

    // Déplacer les balles
    this.balls.forEach(ball => {
      ball.move(this.canvas); // Déplace chaque balle
    });

    // Vérifier les collisions et filtrer les balles
    this.balls = this.balls.filter(ball => !ball.collisionWith(this.obstacle));

    // Dessiner l'obstacle
    this.obstacle.draw(this.context);

    // Dessiner les balles restantes
    this.balls.forEach(ball => {
      ball.draw(this.context); // Dessine chaque balle
    });

    this.animationRequest = requestAnimationFrame(this.animate);
  }
} 