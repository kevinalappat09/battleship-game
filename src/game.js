import displayPlayerBoard from "./displayBoard";
import generateDiv from "./ui/element/divGen";
import generateHeading from "./ui/element/headingGen";

const bodyContainer = document.querySelector(".container");


function gameLoop(currPlayer,oppPlayer,onComplete) {
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild(displayPlayerBoard(currPlayer,oppPlayer));

    if(currPlayer.name === "CPU") {
        let toAttackX,toAttackY;
        do {
            toAttackX = Math.floor(Math.random() * 9) + 1;
            toAttackY = Math.floor(Math.random() * 9) + 1;
        } while (oppPlayer.gameboard.hitSpots.some(([x, y]) => x === toAttackX && y === toAttackY));

        try {
            oppPlayer.gameboard.receiveAttack(toAttackX,toAttackY);

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
    } else {
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

export default playCPUGame;