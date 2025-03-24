import vaisseauBallonSrc from './assets/images/vaisseau-ballon-petit.png';
import tirSrc            from './assets/images/tir.png';
import saucer       from './assets/images/flyingSaucer-petit.png'
export default class Mobile {
    #x; // Coordonnée x
    #y; // Coordonnée y
    #image; // Image du mobile
    #stepX; // Pas de déplacement horizontal
    #stepY; // Pas de déplacement vertical

    constructor(x, y, imageSrc, stepX = 0, stepY =0) {
        this.#image = this.#createImage(imageSrc);
       

        this.#x = x;
        this.#y = y;
        this.#stepX = stepX;
        this.#stepY = stepY;
    }
    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }
    get width() {
        return this.#image.width;
    }
    get height() {
        return this.#image.height;
    }
    draw(context){
        context.drawImage(this.#image, this.#x, this.#y);
    }
    move(canvas) {
        if (this.up && this.getY() - this.getStepY() >= 0) {
            // Déplace vers le haut
            this.#y -= this.getStepY();
        } else if (this.down && this.getY() + this.getStepY() + this.height <= canvas.height) {
            // Déplace vers le bas
            this.#y += this.getStepY();
        }
        
    }
    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }
    getStepY() {
        return this.#stepY;
    }
    getStepX(){
        return this.#stepX
    }
 }
