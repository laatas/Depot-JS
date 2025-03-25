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
        // Vérifie si le déplacement horizontal reste dans les limites du canvas 
        if (this.#x + this.#stepX >= 0 && this.#x + this.#stepX + this.#image.width <= canvas.width) {
            this.#x += this.#stepX;
        }
        this.#image.height

        // Vérifie si le déplacement vertical reste dans les limites du canvas
        if (this.#y + this.#stepY >= 0 && this.#y + this.#stepY + this.#image.height <= canvas.height) {
            this.#y += this.#stepY;
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
