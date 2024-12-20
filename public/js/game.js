export default {
    data() {
      return {
        mapLimitTop: 0,
        mapLimitLeft: 0,
        mapLimitRight: 550,
        mapLimitBottom: 220,
        isGameOver: false,
        score: 0,
        knight: {
            posLeft: 0,
            posTop: 100,
            imgSource: './img/characters/knight/IDLE.gif',
            keyPressed: null, // Store the pressed key
            moveStep: 5, // How much the element moves on key press
        },
        frog: {
            posLeft: 550,
            posTop: 100,
            imgSource: './img/characters/frog/IDLE.gif',
            moveStep: 0.5, // Frog velocity
            isAlive: true, // Frog status
            health: 100,
        },
      }
    },
    methods: {
        handleKeyDown(event) {
            switch (event.key) {
                case "ArrowRight":
                    this.startWalk();
                    if (this.knight.posLeft <= this.mapLimitRight) {
                        this.knight.posLeft += this.knight.moveStep; // Move to the right
                    }
                    break;
                case "ArrowLeft":
                    this.startWalkBack();
                    if(this.knight.posLeft != 0 ) {
                        this.knight.posLeft -= this.knight.moveStep; // Move to the left
                    }
                    break;
                case "ArrowDown":
                    this.startWalk();
                    if(this.knight.posTop <= this.mapLimitBottom){
                        this.knight.posTop += this.knight.moveStep; // Move down
                    }
                    break;
                case "ArrowUp":
                    this.startWalk();
                    if(this.knight.posTop != 0) {
                        this.knight.posTop -= this.knight.moveStep; // Move up
                    }
                    break;
                case " ":
                    this.startAttack();
                    break;
                case "c":
                    this.startDefense();
                    break;
            }
        },
        handleKeyUp(event) {
            if (event.key === " ") {
                this.backToIdle(); // Action when releasing the attack button
            }
            if (event.key === "ArrowRight" || event.key === "ArrowLeft" || event.key === "ArrowDown" || event.key === "ArrowUp") {
                this.backToIdle(); // Action when releasing the movement keys
            }
            if (event.key === "c") {
                this.backToIdle(); // Action when releasing the defense button
            }
        },
        startAttack() {
            this.knight.imgSource = './img/characters/knight/ATTACK-1.gif';
            if (this.checkCollision()) {
                this.frog.health -= 50;
                if (this.frog.health <= 0) {
                    this.killFrog();
                } else {
                    this.frog.imgSource = "./img/characters/frog/HURT.gif";
                    setTimeout(() => {
                        this.frog.imgSource = "./img/characters/frog/IDLE.gif";
                    }, 500);
                }
            }
        },
        startDefense() {
            this.knight.imgSource = './img/characters/knight/DEFEND.gif';
        },
        startWalk() {
            this.knight.imgSource = './img/characters/knight/WALK.gif';
        },
        startWalkBack() {
            this.knight.imgSource = './img/characters/knight/WALK-BACK.gif';
        },
        backToIdle() {
            this.knight.imgSource = './img/characters/knight/IDLE.gif';
        },
        checkCollision() {
            // Calculate the boundaries of the knight and the frog
            const knight = {
                left: this.knight.posLeft,
                right: this.knight.posLeft + 50,
                top: this.knight.posTop,
                bottom: this.knight.posTop + 50,
            };
            const frog = {
                left: this.frog.posLeft,
                right: this.frog.posLeft + 40,
                top: this.frog.posTop,
                bottom: this.frog.posTop + 40,
            };
            return !(
                knight.right < frog.left ||
                knight.left > frog.right ||
                knight.bottom < frog.top ||
                knight.top > frog.bottom
            );
        },
        killFrog() {
            if (!this.frog.isAlive) return; // If the frog is already dead, don't kill it again.
            console.log("Frog was killed");
            this.score += 100;
            this.frog.isAlive = false;
            this.frog.imgSource = "./img/characters/frog/EXPLOSION.gif";
            setTimeout(this.spawnFrog, 1000); // Generate a new frog after 1 second
        },
        spawnFrog() {
            if (this.frog.isAlive) return; // If the frog is still alive, don't spawn a new one.
            this.frog = {
                posLeft: 550,
                posTop: Math.random() * (this.mapLimitBottom - this.mapLimitTop) + this.mapLimitTop,
                imgSource: './img/characters/frog/IDLE.gif',
                moveStep: 0.5, // Frog velocity
                isAlive: true, // Frog status
                health: 100,
            };
            
        },
        moveFrog() {
            if (this.isGameOver) return;
            if (this.frog.isAlive) {
                // Moves the frog to the left
                this.frog.imgSource = "./img/characters/frog/HOP.gif";
                this.frog.posLeft -= this.frog.moveStep;
                // Check if the frog reached the left edge of the map.
                if (this.frog.posLeft <= 10) {
                    this.frog.posLeft = 10; // Frog should not go beyond the left edge.
                    this.frog.imgSource = "./img/characters/frog/IDLE.gif";
                    this.gameOver();
                }
            }
        },
        animateFrog() {
            this.moveFrog(); // Call the frog movement function
            this.animationFrame = requestAnimationFrame(this.animateFrog); // Call the animateFrog function again in the next frame.
        },
        gameOver(){
            this.isGameOver = true; // Set the game over flag
            cancelAnimationFrame(this.animationFrame); // Stop the animation
            // Show the game over modal using bootstrap
            const modalElement = document.getElementById('gameOverModal');
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        },
        restartGame() {
            this.isGameOver = false;
            this.score = 0;
            this.knight = { 
                posLeft: 0,
                posTop: 100,
                imgSource: './img/characters/knight/IDLE.gif',
                keyPressed: null, // Almacena la tecla presionada
                moveStep: 5, // Cuánto se mueve el elemento por pulsación
            };
            this.frog = { 
                posLeft: 550,
                posTop: 100,
                imgSource: './img/characters/frog/IDLE.gif',
                moveStep: 0.5, // Velocidad de la rana
                isAlive: true, // Estado de la rana
                health: 100,
            };
            setTimeout(5000);
            // this.animateFrog(); // Reinicia la animación
        },
          
    },
    mounted() {
        // Adds the keydown event listener to the window
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
        this.animateFrog(); // Starts the animation
    },
    beforeDestroy() {
        // Clean the event listeners
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
        cancelAnimationFrame(this.animationFrame);
    },    
  }
  