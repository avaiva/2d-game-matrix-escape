class Timer {
    constructor(gameDuration, game){
        this.minutesDec = document.getElementById("minDec")
        this.minutesUni = document.getElementById("minUni")
        this.secondsDec = document.getElementById("secDec")
        this.secondsUni = document.getElementById("secUni")
        this.time = gameDuration;
        this.game = game;
    }

    start() {
        this.interval = setInterval(() => {
            this.time--;
            // console.log(this.time);
            this.printTime();
            if (this.time <= 0) {
                console.log("game should end");
                clearInterval(this.interval);
                this.game.endGame();
            }
        }, 1000);
    }

    getMinutes() {
        return Math.floor(this.time / 60);
    }
    
    getSeconds() {
        return (this.time % 60);
    }

    computeTwoDigitNumber(value) {
        return value.toString().padStart(2,0)
      }
    
    printTime() {
        this.printMinutes();
        this.printSeconds();
    }

    printMinutes() {
        this.minutesDec.innerHTML = this.computeTwoDigitNumber(this.getMinutes())[0];
        this.minutesUni.innerHTML = this.computeTwoDigitNumber(this.getMinutes())[1];
        
    }

    printSeconds() {
        this.secondsDec.innerHTML = this.computeTwoDigitNumber(this.getSeconds())[0];
        this.secondsUni.innerHTML = this.computeTwoDigitNumber(this.getSeconds())[1];
        
    }

}