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

            let longPressTimeout;
            gridSquare.addEventListener("mousedown", (event) => {
                // Prevent the default action of the mousedown event
                event.preventDefault();
                longPressTimeout = setTimeout(() => {
                    console.log(`Long press detected ${i},${j}`);
                    updateBoard(player);
                    const userInput = prompt("Enter the coordinates in the format x,y");
                    if(userInput !== null) {
                        const coordinates = userInput.split(',');
                        const x = parseInt(coordinates[0].trim(), 10);
                        const y = parseInt(coordinates[1].trim(), 10);

                        if(!isNaN(x) && !isNaN(y)) {
                            console.log(`The user entered ${x},${y}`);
                        } else {
                            console.log(`Invalid coordinates entered`);
                        }

                        const shipToMove = getHitShip(player.gameboard.unsunkShips,i,j);
                        console.log(shipToMove);

                        player.gameboard.moveShip(shipToMove+1,x,y);
                        updateBoard(player);
                    } else {
                        console.log("User cancelled the prompt");
                    }
                }, 1000);
            });

            gridSquare.addEventListener("mouseup",() => {
                clearTimeout();
            });

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
            });

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

            let longPressTimeout;
            gridSquare.addEventListener("mousedown", (event) => {
                // Prevent the default action of the mousedown event
                event.preventDefault();
                longPressTimeout = setTimeout(() => {
                    console.log(`Long press detected ${i},${j}`);
                    updateBoard(player);
                    const userInput = prompt("Enter the coordinates in the format x,y");
                    if(userInput !== null) {
                        const coordinates = userInput.split(',');
                        const x = parseInt(coordinates[0].trim(), 10);
                        const y = parseInt(coordinates[1].trim(), 10);

                        if(!isNaN(x) && !isNaN(y)) {
                            console.log(`The user entered ${x},${y}`);
                        } else {
                            console.log(`Invalid coordinates entered`);
                        }

                        const shipToMove = getHitShip(player.gameboard.unsunkShips,i,j);
                        console.log(shipToMove);

                        player.gameboard.moveShip(shipToMove+1,x,y);
                        updateBoard(player);
                    } else {
                        console.log("User cancelled the prompt");
                    }
                }, 500);
            });

            gridSquare.addEventListener("mouseup",() => {
                clearTimeout();
            });

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

function moveShip(player,onConfirm) {
    const bodyContainer = document.querySelector(".container");
    bodyContainer.innerHTML = "";
    

    const moveContainer = generateDiv("move-container");
    const colorToApply = getColor(player.color);
    moveContainer.style.backgroundColor = colorToApply;

    const moveHeading = generateHeading("move-heading");
    moveHeading.textContent = `${player.name} Set Your Board`;
    moveContainer.appendChild(moveHeading);

    const boardContainer = generateDiv("board-container");
    const board = getBoard(player);
    boardContainer.appendChild(board);
    moveContainer.appendChild(boardContainer);

    const confirmButton = generateButton("confirm-button");
    confirmButton.textContent = "Confirm";
    confirmButton.style.backgroundColor = colorToApply;
    confirmButton.addEventListener("click",() => {
        if(onConfirm && typeof onConfirm === "function") {
            onConfirm();
        }
    })
    moveContainer.appendChild(confirmButton);

    const helpContainer = generateDiv("help-container");
    helpContainer.textContent = "Click to rotate, Long press and enter coordinates to move";
    moveContainer.appendChild(helpContainer);

    bodyContainer.appendChild(moveContainer);

}

export default moveShip;