import displayPlayerBoard from "./displayBoard";

const bodyContainer = document.querySelector(".container");

function play2PGame(player1, player2) {
    let currentPlayer = 1;
    try {
        while(player1.gameboard.allSunk() === false && player2.gameboard.allSunk() === false) {
            if(currentPlayer === 1) {
                
                //player one plays
            } else if(currentPlayer === 2) {
                // player two plays
            }
    
            //player switch
            if(currentPlayer === 1) {
                // display modal asking player 1 to give the device to player 2
                currentPlayer = 2;
            } else {
                // display modal asking player 2 to give the device to player 1
                currentPlayer = 1;
            }
        }
    } catch(err) {
        console.log(err);
    }
    
}

function playCPUGame(player1, CPU) {
    bodyContainer.innerHTML = "";
    let currentPlayer = 1;
    bodyContainer.appendChild(displayPlayerBoard(player1,CPU));
    // try {
        
    //     while(player1.gameboard.allSunk() === false && CPU.gameboard.allSunk() === false) {
    //         if(currentPlayer === 1) {
                
                    currentPlayer = 2;
    //         } else if(currentPlayer === 2) {
    //             // CPU randomly automatically plays and there is no need for any board to be displays for the CPU.
    //             // CPU plays
    //         }

    //         //player switch
    //         if(currentPlayer === 1) {
    //             //display message saying it is now CPU turn
    //             currentPlayer = 2;
    //         } else {
    //             // display message saying it is now player turn
    //             currentPlayer =1;
    //         }
    //     }
    // } catch(err) {
    //     console.log(err);
    // }
}

export default playCPUGame;