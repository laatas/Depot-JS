import StarShip from "./starship.js";
import Saucer from "./saucer.js"; // Assurez-vous d'avoir une classe Saucer définie
import Shoot
 from "./shoot.js";
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
        this.shoots = []; // Initialement vide
        this.#score = 0; // Initialisation du score
        this.saucerInterval = null;
        this.#initEventListeners(); // Initialise les écouteurs d'événements
        let ShowScore = document.getElementById("score");
    }

    #initEventListeners() {
        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp") {
                this.#starShip.moveUp();
            } else if (event.key === "ArrowDown") {
                this.#starShip.moveDown();
            }
        });
        const ajoutSaucerButton = document.getElementById("nouvelleSoucoupe");
        ajoutSaucerButton.addEventListener("click", () => {
            this.animate(); // Ajoute une soucoupe

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
            if (!saucer.move(this.#canvas)){
                this.updateScore(-1000); // Réduit le score si la soucoupe sort
                this.#saucers.splice(index,1); // Supprime la soucoupe
            }
        });
        this.shoots.forEach((shoot, index) => {
            shoot.move(this.#canvas); // Déplace le tir
            shoot.draw(this.#context); // Dessine le tir
            const saucer = shoot.checkCollisionWithSaucers(this.#saucers); // Vérifie les collisions
            if (saucer) {
                this.updateScore(200); // Augmente le score
                this.#saucers = this.#saucers.filter(s => s !== saucer); // Supprime la soucoupe
                this.shoots.splice(index, 1); // Supprime le tir
            }
        });
        requestAnimationFrame(() => this.animate()); // Appelle la méthode d'animation
    }
    handleToggleSaucerClick() {
        this.toggleSaucerInterval(); // Appelle la méthode pour ajouter des soucoupes
        document.activeElement.blur(); // Enlève le focus du bouton
    }
    
    toggleSaucerInterval() {
        if (this.saucerInterval) {
            clearInterval(this.saucerInterval); // Arrête l'interval
            this.saucerInterval = null; // Réinitialise l'interval
        } else {
            this.saucerInterval = setInterval(() => {
                if (Math.random() < 0.5) {
                    this.addSaucer(); // Ajoute une soucoupe
                }
                this.addSaucer(); // Ajoute une soucoupe
            }, 750); // Ajoute une soucoupe toutes
        }
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
    get score() {
        return this.#score;
    }
    // Méthode pour modifier le score
    updateScore(points) {
        this.#score += points; // Modifie le score
        for (let i=0; i< 100 ;i++){
            console.log(`Score : ${this.#score}`); // Affiche le score
        }
        document.getElementById("score").innerText = this.#score; 
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
    get starShip() {
        return this.#starShip;
    }
    addShoot(shoot) {
        this.shoots.push(shoot); // Ajoute un tir
    }
  
}





