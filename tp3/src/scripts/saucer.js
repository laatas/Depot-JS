import Mobile from "./mobile";
import img from "./assets/images/flyingSaucer-petit.png";
import Game from "./game";
import { sup } from "jsx-transpiler/lib/knownTags";
export default class Saucer extends Mobile{
    
    constructor(x, y) {
        super(x, y, img, -3, 0); // Déplacement horizontal par défaut : -3 (vers la gauche)
        this.img = img;
    }
    move(canvas){
        // Déplace la soucoupe horizontalement
        this.x += this.getStepX();

        // Vérifie si la soucoupe sort du canvas
        if (this.getX() + this.width < 0) {
            return false; // Indique que la soucoupe doit être supprimée
        }
        return true; // La soucoupe reste dans le canvas
    }

}