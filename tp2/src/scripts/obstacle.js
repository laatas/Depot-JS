export default class Obstacle {
  constructor(x, y, width, height) {
    this.x = x; // Position x de l'obstacle
    this.y = y; // Position y de l'obstacle
    this.width = width; // Largeur de l'obstacle
    this.height = height; // Hauteur de l'obstacle
  }

  draw(context) {
    context.fillStyle = 'black'; // Couleur de l'obstacle
    context.fillRect(this.x, this.y, this.width, this.height); // Dessine le rectangle
  }

  // Nouvelle méthode pour vérifier les collisions avec une balle
  checkCollision(ball) {
    return (
      ball.x + ball.width > this.x &&
      ball.x < this.x + this.width &&
      ball.y + ball.height > this.y &&
      ball.y < this.y + this.height
    );
  }
} 