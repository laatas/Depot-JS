import Mobile from './mobile.js';
import tirSrc from './assets/images/tir.png';

export default class Shoot extends Mobile {

    constructor(x, y) {
        super(x, y, tirSrc, 8, 0); // Déplacement horizontal par défaut : 10 (vers la droite)
        this.img = tirSrc;
    }

    move(canvas) {
        // Déplace le tir horizontalement
        this.x += this.getStepX();

        // Vérifie si le tir sort du canvas
        if (this.getX() + this.width > canvas.width) {
            return false; // Indique que le tir doit être supprimé
        }
        return true; // Le tir reste dans le canvas
    }
    // Détecte une collision avec un autre Mobile
    isCollidingWith(mobile) {
        return (
            this.getX() < mobile.getX() + mobile.width &&
            this.getX() + this.width > mobile.getX() &&
            this.getY() < mobile.getY() + mobile.height &&
            this.getY() + this.height > mobile.getY()
        );
    }

    // Vérifie les collisions avec une liste de soucoupes
    checkCollisionWithSaucers(saucers) {
        for (const saucer of saucers) {
            if (!saucer.isFalling && this.isCollidingWith(saucer)) {
                return saucer; // Retourne la soucoupe en collision
            }
        }
        return null; // Aucune collision
    }
}