class Game { 
    constructor() {
        this.splashScreen = document.getElementById("splash-screen");
        this.introScreen = document.getElementById("intro-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("end-screen");
        this.matrixBody = document.getElementById("matrix-body");
        this.consoleBody = document.getElementById("console-body");
        this.introTextCanvas = document.getElementById("intro-canvas");
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
        // this.displayIntroText();
    }

    // displayIntroText() {
    //     console.log("displayIntroText activated")
    //     // this.introTextCanvas.height = window.innerHeight;
    //     // this.introTextCanvas.width = window.innerWidth;

    //     let ctx = this.introTextCanvas.getContext("2d");
    //     let text = "Hi stranger. It's time to wake up";
    //     let i = 1;
    //     let char;
    //     let fps = 200;

    //     function typeWriter(){
    //         char = text.substr(0, i) + "_";  
    //         // Clear the canvas
    //         ctx.clearRect(0,0, game.introTextCanvas.width, game.introTextCanvas.height)
    //         ctx.fillStyle = '#7FEAA1';
    //         ctx.font = '60px sans-serif';
    //         ctx.fillText(char, canvas.width/3, canvas.height/2);  
    //         if (i<=text.length){
    //           setTimeout(typeWriter, fps)
    //           i++
    //         }
    //       }
    //     typeWriter()
    // }


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