class Game { 
    constructor() {
        this.splashScreen = document.getElementById("splash-screen");
        this.introScreen = document.getElementById("intro-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("end-screen");
        this.matrixBody = document.getElementById("matrix-body");
        this.consoleBody = document.getElementById("console-body");
        this.player = new Player(
            this.matrixBody,
            0,
            220,
            50,
            50,
            "/images/player-test.png"
        );
        this.bugs = null;
        this.errors = null;
        this.score = 0;
        this.GameIsOver = false;
    }

    intro() {
        this.splashScreen.style.display = "none";
        this.introScreen.style.display = "block";
    }


    start() {
        this.introScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameLoop();
    }

    gameLoop() {
        // console.log("game loop");
        
        if (this.GameIsOver) {
            return;
        }

        this.update();
        window.requestAnimationFrame(()=> {
            this.gameLoop();
        })
    }

    update() {
        // console.log("updated");
        this.player.move()
    }

    endGame() {
        this.GameIsOver = true;
        this.endScreen.style.display = "block";
    }

}