import displayPlayerBoard from "./displayBoard";
import generateDiv from "./ui/element/divGen";
import generateHeading from "./ui/element/headingGen";

const bodyContainer = document.querySelector(".container");


function gameLoop(currPlayer,oppPlayer) {
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild(displayPlayerBoard(currPlayer,oppPlayer));

    if(currPlayer.name === "CPU") {
        let toAttackX,toAttackY;
        do {
            toAttackX = Math.floor(Math.random() * 9) + 1;
            toAttackY = Math.floor(Math.random() * 9) + 1;
        } while (oppPlayer.gameboard.hitSpots.some(([x, y]) => x === toAttackX && y === toAttackY));

        console.log(toAttackX,toAttackY);
        try {
            oppPlayer.gameboard.receiveAttack(toAttackX,toAttackY);

            if(oppPlayer.gameboard.allSunk()) {
                bodyContainer.innerHTML = "";
                const winMessage = generateHeading("win-message");
                winMessage.style.backgroundColor = currPlayer.color;
                winMessage.textContent = `${currPlayer.name} has won`;
                bodyContainer.appendChild(winMessage);
                return;
            }
            const p1 = currPlayer;
            const p2 = oppPlayer;
            gameLoop(p2,p1);
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
                            bodyContainer.innerHTML = "";
                            const winMessage = generateHeading("win-message");
                            winMessage.style.backgroundColor = currPlayer.color;
                            winMessage.textContent = `${currPlayer.name} has won`;
                            bodyContainer.appendChild(winMessage);
                            return;
                        }
                        const p1 = currPlayer;
                        const p2 = oppPlayer;
                        gameLoop(p2,p1);
                    } catch(err) {
                        console.log(err);
                    }
                })
            }
        }
    }
}

// function play2PGame(player1, player2) {
//     let currentPlayer = 1;
//     try {
//         while(player1.gameboard.allSunk() === false && player2.gameboard.allSunk() === false) {
//             if(currentPlayer === 1) {
                
//                 //player one plays
//             } else if(currentPlayer === 2) {
//                 // player two plays
//             }
    
//             //player switch
//             if(currentPlayer === 1) {
//                 // display modal asking player 1 to give the device to player 2
//                 currentPlayer = 2;
//             } else {
//                 // display modal asking player 2 to give the device to player 1
//                 currentPlayer = 1;
//             }
//         }
//     } catch(err) {
//         console.log(err);
//     }
    
// }


function playCPUGame(player1, CPU) {
    bodyContainer.innerHTML = "";
    gameLoop(player1,CPU);
}

export default playCPUGame;