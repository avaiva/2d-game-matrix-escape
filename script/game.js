class Game { 
    constructor() {
        this.splashScreen = document.getElementById("splash-screen");
        this.introScreen = document.getElementById("intro-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("end-screen");
        this.matrixBody = document.getElementById("matrix-body");
        this.consoleBody = document.getElementById("console-body");
        this.introTextCanvas = document.getElementById("intro-canvas");
        this.bugsFound = document.getElementById("found-bug-count");
        this.score = document.getElementById("score");
        this.player = new Player(
            this.matrixBody,
            0,
            220,
            50,
            50,
            "/images/player-test.png"
        );
        this.timer = new Timer(180,this);
        this.bug = [new Bug(this.matrixBody)];
        this.bugsFoundCount = 0;
        this.errors = null;
        this.scoreCount = 0;
        this.gameIsOver = false;

    }

    intro() {
        this.splashScreen.style.display = "none";
        this.endScreen.style.display = "none";
        this.introScreen.style.display = "block";
        console.log(this.endScreen);
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
        this.endScreen.style.display = "none";
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
        this.player.move();
        // this.bug.move();
        if(this.player.didCollide(this.bug[0])){
            this.bugsFoundCount += 1;
            this.bugsFound.innerHTML = `${this.bugsFoundCount}`;
            console.log(this.bugsFound);
            
            this.scoreCount += 10;
            this.score.innerHTML = `${this.scoreCount}`;
            console.log(this.score);
            
            this.bug[0].element.remove();
            this.bug.pop();
            this.bug.unshift(new Bug);
            console.log(this.bug)
            // this.bug.push(new Bug(this.matrixBody));
        }
        }

    endGame() {
        console.log("end game");
        this.endScreen.style.display = "block";
        this.gameScreen.style.display = "none";
        this.player.element.remove();
        this.bug[0].element.remove();
    }

}