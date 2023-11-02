window.onload = function() {
    const readyButton = document.getElementById("btn-ready");
    const startGameButton = document.getElementById("btn-start");
    const restartGameButton = document.getElementById("btn-restart");
    const backToIntroButton = document.getElementById("btn-back-to-intro");

    let game = new Game();


    function introGame() {
        console.log("game intro started");
        game.intro();
    }

    function startGame() { 
        console.log("start game");
        game.start();
        game.timer.start(game.endGame);	
    }

    function restartGame() { 
        game = new Game();
        game.start();
        game.timer.start(game.endGame);	
    }

    function backToIntro() { 
        game = new Game();
        game.intro();
    }

    readyButton.addEventListener("click", introGame);
    startGameButton.addEventListener("click", startGame);
    restartGameButton.addEventListener("click", restartGame);
    backToIntroButton.addEventListener("click", backToIntro)

    function handleKeyDown(event) {
        switch (event.keyCode) {
            case 37:
                game.player.directionX = -10;
                event.preventDefault();
                break;
            case 38:
                game.player.directionY = -10;
                event.preventDefault();
                break;
            case 39:
                game.player.directionX = 10;
                event.preventDefault();
                break;
            case 40:
                game.player.directionY = 10;
                event.preventDefault();
                break;
        }
    }

    function handleKeyUp(event) {
        switch (event.keyCode) {
            case 37:
                game.player.directionX = 0;
                event.preventDefault();
                break;
            case 38:
                game.player.directionY = 0;
                event.preventDefault();
                break;
            case 39:
                game.player.directionX = 0;
                event.preventDefault();
                break;
            case 40:
                game.player.directionY = 0;
                event.preventDefault();
                break;
        }
    }
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
}