import StarShip from "./starship.js";
import Saucer from "./saucer.js"; // Assurez-vous d'avoir une classe Saucer définie

export default class Game {
    #canvas; // Le canvas du jeu
    #context; // Contexte de rendu
    #starShip; // Instance de StarShip
    #saucers; // Tableau des soucoupes
    #score; // Score du jeu

    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = this.#canvas.getContext("2d");
        this.#starShip = new StarShip(40, this.#canvas.height / 2); // Vaisseau centré verticalement
        this.#saucers = []; // Initialement vide
        this.#score = 0; // Initialisation du score

    }

    #initEventListeners() {
        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp") {
                this.#starShip.moveUp();
            } else if (event.key === "ArrowDown") {
                this.#starShip.moveDown();
            }
        });
    }

    animate() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height); // Efface le canvas
        
        this.#starShip.move(); // Déplace le vaisseau
        this.#starShip.draw(this.#context); // Dessine le vaisseau

        this.#saucers.forEach((saucer,index )=> {
            console.log(`Soucoupe ${index} : x=${saucer.getX()}, y=${saucer.getY()}`);
            saucer.move(this.#canvas); // Déplace la soucoupe
            saucer.draw(this.#context); // Dessine la soucoupe
        });

        requestAnimationFrame(() => this.animate()); // Appelle la méthode d'animation
    }
    
    // Méthode pour ajouter une soucoupe
    addSaucer() {
        const randomY = Math.random() * this.#canvas.height; // Hauteur aléatoire
        //this.#saucers.push(new Saucer(this.#canvas.width, randomY)); // Ajoute une nouvelle soucoupe
        //const randomY = Math.random() * this.#canvas.height; // Hauteur aléatoire
        const newSaucer = new Saucer(this.#canvas.width, randomY);
        this.#saucers.push(newSaucer); // Ajoute une nouvelle soucoupe
        console.log(`Nouvelle soucoupe ajoutée : x=${newSaucer.getX()}, y=${newSaucer.getY()}`);
    }

    // Méthode pour modifier le score
    updateScore(points) {
        this.#score += points; // Modifie le score
        console.assert
    }

    removeOffscreenSaucers() {
        this.#saucers = this.#saucers.filter(saucer => {
            const isVisible = saucer.move(this.#canvas); // Déplace la soucoupe et vérifie si elle est visible
            if (!isVisible) {
                this.updateScore(-1000); // Réduit le score si la soucoupe sort
            }
            return isVisible; // Garde uniquement les soucoupes visibles
        });
    }
}





