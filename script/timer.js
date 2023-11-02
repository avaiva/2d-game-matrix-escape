class Timer {
    constructor(gameDuration, game){
        this.time = gameDuration;
        this.game = game;
    }

    start(endGame) {
        this.interval = setInterval(() => {
            this.time--;
            console.log(this.time);
            if (this.time <= 0) {
                console.log("game should end");
                clearInterval(this.interval);
                this.game.endGame();
            }
        }, 1000);
    }

    

}