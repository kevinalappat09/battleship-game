import generateDiv from "./ui/element/divGen";
import generateHeading from "./ui/element/headingGen";

function getActivePlayerSide(player) {
    // Active player side div initialization
    const activePlayerSide = generateDiv("active-player-div");
    const activePlayerHeading = generateHeading("active-player-heading");
    activePlayerHeading.textContent = "Your Board";
    activePlayerSide.appendChild(activePlayerHeading);

    // Giving the active player side color
    // TODO - finish this logic add more colors.
    if(player.color === "red") {
        activePlayerSide.style.backgroundColor = "var(--main-screen-red)";
    } else {
        activePlayerSide.style.backgroundColor = "var(--main-screen-blue)";
    }

    const activePlayerBoard = generateDiv("active-player-board");
    for(let i=0; i<9; i++) {
        for(let j=0;j<9;j++) {
            const gridSquare = generateDiv("active-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j) && player.gameboard.hitSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(player.gameboard.hitSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } else if(player.gameboard.occupiedSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            // add the event listener that gives errror if clicked
            gridSquare.addEventListener("click",() => giveActivePlayerClickError(i,j));

            activePlayerBoard.appendChild(gridSquare);
        }
    }
    activePlayerSide.appendChild(activePlayerBoard);

    return activePlayerSide;
}

function giveActivePlayerClickError(row,col) {
    console.log("Clicking your own board now is futile :)");
}

function getOppPlayerSide(oppPlayer) {
    // Opponent player side div initialization
    const oppPlayerSide = generateDiv("opp-player-div");
    const oppPlayerHeading = generateHeading("opp-player-heading");
    oppPlayerHeading.textContent = "Opponent Board";
    oppPlayerSide.appendChild(oppPlayerHeading);

    // Giving the opp player side color
    // Add the other colors
    if(oppPlayer.color === "red") {
        oppPlayerSide.style.backgroundColor = "var(--main-screen-red)";
    } else {
        oppPlayerSide.style.backgroundColor = "var(--main-screen-blue)";
    }

    const oppPlayerBoard = generateDiv("opp-player-board");
    for(let i=0; i<9; i++) {
        for(let j=0;j<9;j++) {
            const gridSquare = generateDiv("opp-player-grid-square");
            if(oppPlayer.gameboard.occupiedSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j) && oppPlayer.gameboard.hitSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(oppPlayer.gameboard.hitSpots.some(coord => coord[0]-1 === i && coord[1]-1 === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } 

            // add the event listener that gives errror if clicked
            gridSquare.addEventListener("click",() => oppPlayerClickFunction(i,j,oppPlayer));

            oppPlayerBoard.appendChild(gridSquare);
        }
    }
    oppPlayerSide.appendChild(oppPlayerBoard);

    return oppPlayerSide;
}

function oppPlayerClickFunction(row,col, oppPlayer) {
    oppPlayer.gameboard.receiveAttack(row,col);
    console.log(oppPlayer.gameboard.hitSpots);
}

function displayPlayerBoard(player, oppPlayer) {
    const boardDiv = generateDiv("board-div");
    
    const activePlayerSide = getActivePlayerSide(player);
    const oppPlayerSide = getOppPlayerSide(oppPlayer);

    boardDiv.appendChild(activePlayerSide);
    boardDiv.appendChild(oppPlayerSide);
    
    // add event listeners to each grid
    return boardDiv;
}

export default displayPlayerBoard;