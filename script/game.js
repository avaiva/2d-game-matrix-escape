class Game { 
    constructor() {
        this.splashScreen = document.getElementById("splash-screen");
        this.introScreen = document.getElementById("intro-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("end-screen");
        this.matrixBody = document.getElementById("matrix-body");
        this.consoleBody = document.getElementById("console-body");
        this.player = null;
        this.bugs = null;
        this.errors = null;
        this.score = 0;
        this.GameIsOver = false;
    }

    start() {
        this.splashScreen.style.display = "none";
        this.gameScreen.style.display = "block";
    }

}