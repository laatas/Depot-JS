import Mobile from "./mobile";
import img from "./assets/images/flyingSaucer-petit.png";
import Game from "./game";
export default class Saucer extends Mobile{

    constructor(x, y) {
        super(x, y, img, -3, 0); // Déplacement horizontal par défaut : -3 (vers la gauche)

        this.sauce = this.#createImage(img);
    }
    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = img;
        return newImg;
    }
    move(canvas){
        // Déplace la soucoupe horizontalement
        this.x += -3;
        // Vérifie si la soucoupe sort du canvas
        if (this.getX() + this.width < 0) {
            return false; // Indique que la soucoupe doit être supprimée
        }
        return true; // La soucoupe reste dans le canvas
    }
}