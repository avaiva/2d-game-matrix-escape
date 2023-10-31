window.onload = function() {
    const readyButton = document.getElementById("btn-ready");

    let game = new Game();

    readyButton.addEventListener("click", startGame);

    function startGame() { 
        console.log("start game");
        game.start();	
    }

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