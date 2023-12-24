import getColor from "./getColor";
import getHitShip from "./getHitShip";
import generateButton from "./ui/element/btnGen";
import generateDiv from "./ui/element/divGen";
import generateHeading from "./ui/element/headingGen";

function updateBoard(player) {
    const getBoard = document.querySelector('.board-container');
    getBoard.innerHTML = "";
    const moveBoard = generateDiv("move-board");
    for(let i=1;i<10;i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = generateDiv("move-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            // TODO - rotating ship not done
            gridSquare.addEventListener("click",() => {
                
                const shipHit = getHitShip(player.gameboard.unsunkShips,i,j);
                console.log(shipHit);
                try {
                    if(player.gameboard.unsunkShips[shipHit].alignment === "vertical") {
                        player.gameboard.rotateShip(shipHit+1,"horizontal");
                    } else {
                        player.gameboard.rotateShip(shipHit+1,"vertical");
                    }
                    console.log(player.gameboard.unsunkShips);
                } catch(err) {
                    console.log(err);
                }

                updateBoard(player);
            })

            moveBoard.appendChild(gridSquare);
        }
    }
    getBoard.appendChild(moveBoard);
}

function getBoard(player) {
    const moveBoard = generateDiv("move-board");
    for(let i=1;i<10;i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = generateDiv("move-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            // TODO - rotating ship not done
            gridSquare.addEventListener("click",() => {
                
                const shipHit = getHitShip(player.gameboard.unsunkShips,i,j);
                console.log(shipHit);
                try {
                    if(player.gameboard.unsunkShips[shipHit].alignment === "vertical") {
                        player.gameboard.rotateShip(shipHit+1,"horizontal");
                    } else {
                        player.gameboard.rotateShip(shipHit+1,"vertical");
                    }
                    console.log(player.gameboard.unsunkShips);
                } catch(err) {
                    console.log(err);
                }

                updateBoard(player);
            })

            moveBoard.appendChild(gridSquare);
        }
    }
    return moveBoard;
}

function moveShip(player) {
    const bodyContainer = document.querySelector(".container");
    bodyContainer.innerHTML = "";
    

    const moveContainer = generateDiv("move-container");
    const colorToApply = getColor(player.color);
    moveContainer.style.backgroundColor = colorToApply;

    const moveHeading = generateHeading("move-heading");
    moveHeading.textContent = "Set Your Board";
    moveContainer.appendChild(moveHeading);

    const boardContainer = generateDiv("board-container");
    const board = getBoard(player);
    boardContainer.appendChild(board);
    moveContainer.appendChild(boardContainer);

    const confirmButton = generateButton("confirm-button");
    confirmButton.textContent = "Confirm";
    confirmButton.style.backgroundColor = colorToApply;
    moveContainer.appendChild(confirmButton);

    const helpContainer = generateDiv("help-container");
    helpContainer.textContent = "Help content here";
    moveContainer.appendChild(helpContainer);

    bodyContainer.appendChild(moveContainer);
}

export default moveShip;