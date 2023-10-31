window.onload = function() {
    const readyButton = document.getElementById("btn-ready");

    let game = new Game();

    readyButton.addEventListener("click", startGame);

    function startGame() { 
        console.log("start game");
        game.start();	
    }
}