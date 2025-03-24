// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {
  
	static BALL_WIDTH = 48;

  constructor(x,y) {
    // A COMPLETER...
    this.x = x;
    this.y = y;
    this.image = this.#createImage(ballImgSrc);
    this.deltaX = 3;
    this.deltaY = -2;
  }

  /* draw this ball, using the given drawing 2d context */
  draw(context) {
    context.drawImage(this.image, this.x, this.y, Ball.BALL_WIDTH, Ball.BALL_WIDTH);
  }
  move(canvas) {
    // Vérifie les collisions avec les bords et inverse la direction si nécessaire
    if (this.x + this.deltaX < 0 || this.x + Ball.BALL_WIDTH + this.deltaX > canvas.width) {
      this.deltaX = -this.deltaX; // Inversion du mouvement horizontal
    }
    if (this.y + this.deltaY < 0 || this.y + Ball.BALL_WIDTH + this.deltaY > canvas.height) {
      this.deltaY = -this.deltaY; // Inversion du mouvement vertical
    }

    // Applique le déplacement
    this.x += this.deltaX;
    this.y += this.deltaY;
  }


  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }
  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }

  // Nouvelle méthode pour vérifier les collisions avec un obstacle
  collisionWith(obstacle) {
    const P1 = {
      x: Math.max(this.x, obstacle.x),
      y: Math.max(this.y, obstacle.y)
    };
    const P2 = {
      x: Math.min(this.x + this.width, obstacle.x + obstacle.width),
      y: Math.min(this.y + this.height, obstacle.y + obstacle.height)
    };

    return P1.x < P2.x && P1.y < P2.y; // Vérifie s'il y a chevauchement
  }
}
