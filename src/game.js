import displayPlayerBoard from "./displayBoard";

// Get the main container
const bodyContainer = document.querySelector(".container");

// Run the game loop.
function gameLoop(currPlayer,oppPlayer,onComplete) {
    // Empty the game loop and append the main board.
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild(displayPlayerBoard(currPlayer,oppPlayer));

    // If the current player is CPU.
    if(currPlayer.name === "CPU") {
        // Get random coordinates to attack and make sure that those coordinates have not already been attacked.
        let toAttackX,toAttackY;
        do {
            toAttackX = Math.floor(Math.random() * 9) + 1;
            toAttackY = Math.floor(Math.random() * 9) + 1;
        } while (oppPlayer.gameboard.hitSpots.some(([x, y]) => x === toAttackX && y === toAttackY));

        // Do the attack
        try {
            // Do recieve attack on the opponent player.
            oppPlayer.gameboard.receiveAttack(toAttackX,toAttackY);

            // If all of them have sunk -> game over condition.
            if(oppPlayer.gameboard.allSunk()) {
                onComplete(currPlayer);
                return;
            }

            // Switch players. 
            const p1 = currPlayer;
            const p2 = oppPlayer;
            gameLoop(p2,p1,onComplete);
        } catch(err) {
            console.log(err);
        }
    // If the current player is any other player then we need to give chance for the player.
    } else {

        // Get the opponent player grid squares and add the event listner for each.
        const oppGridSquares = Array.from(document.querySelectorAll(".opp-player-grid-square"));
        for(let i=0;i<9;i++) {
            for(let j=0;j<9;j++) {

                oppGridSquares[(i*9) + j].addEventListener("click",function () {
                    try {
                        oppPlayer.gameboard.receiveAttack(i+1,j+1);

                        if(oppPlayer.gameboard.allSunk()) {
                            onComplete(currPlayer);
                            return;
                        }
                        const p1 = currPlayer;
                        const p2 = oppPlayer;
                        gameLoop(p2,p1,onComplete);
                    } catch(err) {
                        console.log(err);
                    }
                })
            }
        }
    }
}

function play2PGame(player1, player2) {
    bodyContainer.innerHTML = "";
    gameLoop(player1,player2);
}


function playCPUGame(player1, CPU,onComplete) {
    bodyContainer.innerHTML = "";
    gameLoop(player1,CPU,onComplete);
}

export {playCPUGame,play2PGame};