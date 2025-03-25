import Mobile from "./mobile";
import vaisseauBallonSrc from './assets/images/vaisseau-ballon-petit.png';

export default class StarShip extends Mobile {
    #moving; // Indique si le vaisseau se déplace
    #canvas
    constructor(x, y) {
        super(x, y, vaisseauBallonSrc, 0, 8); // Pas horizontal = 0, pas vertical = 8
        this.#moving = false; // Initialement immobile
        this.#canvas = document.getElementById("stars");
        this.x= x;
        this.y= y;
    }

    get up() {
        return this.#moving === 'up';
    }

    get down() {
        return this.#moving === 'down';
    }

    moveUp() {
        this.#moving = 'up';
    }

    moveDown() {
        this.#moving = 'down';
    }

    move() {
        // Vérifie si le vaisseau peut se déplacer sans sortir du canvas
        if (this.#moving === 'up' && this.getY() - this.getStepY() >= 0) {
            this.y -= this.getStepY(); // Déplace vers le haut
        } else if (this.#moving === 'down' && this.getY() + this.getStepY() + this.height <= this.#canvas.height) {
            this.y += this.getStepY(); // Déplace vers le bas
        }
        this.stop(); // Réinitialise le mouvement après le déplacement
    }

    stop() {
        this.#moving = false; // Réinitialise le mouvement
    }
}
