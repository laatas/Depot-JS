import Mobile from "./mobile";
import vaisseauBallonSrc from './assets/images/vaisseau-ballon-petit.png';

export default class StarShip extends Mobile {
    #moving; // Indique si le vaisseau se déplace
    #canvas
    constructor(x, y) {
        super(x, y, vaisseauBallonSrc, 0, 8); // Pas horizontal = 0, pas vertical = 8
        this.#moving = false; // Initialement immobile
        this.#canvas = document.getElementById("stars");
    }

    get up() {
        return this.#moving === 'up';
    }

    get down() {
        return this.#moving === 'down';
    }

    moveUp() {
        this.#moving = 'up';
        this.move(); // Appelle la méthode move
    }

    moveDown() {
        this.#moving = 'down';
        this.move(); // Appelle la méthode move
    }

    move() {
        // Vérifie si le vaisseau peut se déplacer sans sortir du canvas
        super.move(this.#canvas); // Passe le canvas à la méthode move de Mobile
        this.stop(); // Réinitialise le mouvement après le déplacement
    }

    stop() {
        this.#moving = false; // Réinitialise le mouvement
    }
}
