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

    readyButton.addEventListener("click", introGame);
    startGameButton.addEventListener("click", startGame);
    restartGameButton.addEventListener("click", restartGame);
    backToIntroButton.addEventListener("click", introGame)

    function handleKeyDown(event) {
        switch (event.keyCode) {
            case 37:
                game.player.directionX = -1;
                event.preventDefault();
                break;
            case 38:
                game.player.directionY = -1;
                event.preventDefault();
                break;
            case 39:
                game.player.directionX = 1;
                event.preventDefault();
                break;
            case 40:
                game.player.directionY = 1;
                event.preventDefault();
                break;
        }
    }

    function handleKeyUp(event) {
        switch (event.keyCode) {
            case 37:
                game.player.directionX = 0;
                event.preventDefault();
                console.log("key released");
                break;
            case 38:
                game.player.directionY = 0;
                event.preventDefault();
                console.log("key released");
                break;
            case 39:
                game.player.directionX = 0;
                event.preventDefault();
                console.log("key released");
                break;
            case 40:
                game.player.directionY = 0;
                event.preventDefault();
                console.log("key released");
                break;
        }
    }
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
}