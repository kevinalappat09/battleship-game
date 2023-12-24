import getColor from "./getColor";
import generateDiv from "./ui/element/divGen";
import generateHeading from "./ui/element/headingGen";

function buildActivePlayerBoard(player) {
    const activePlayerBoard = generateDiv("active-player-board");
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = generateDiv("active-player-grid-square");
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } else if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            // add the event listener that gives errror if clicked
            gridSquare.addEventListener("click",() => {
                console.log("Clicking your own board now is futile :)");
            });
            activePlayerBoard.appendChild(gridSquare);
        }
    }
    return activePlayerBoard;
}

function buildOppPlayerBoard(oppPlayer) {
    const oppPlayerBoard = generateDiv("opp-player-board");
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            const gridSquare = generateDiv("opp-player-grid-square");
            if(oppPlayer.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            }
            oppPlayerBoard.appendChild(gridSquare);
        }
    }
    return oppPlayerBoard;
}

function getActivePlayerSide(player) {
    const activePlayerSide = generateDiv("active-player-div");
    const activePlayerHeading = generateHeading("active-player-heading");
    activePlayerHeading.textContent = `${player.name} Board`;
    activePlayerSide.appendChild(activePlayerHeading);
    activePlayerSide.style.backgroundColor = getColor(player.color);
    const activePlayerBoard = buildActivePlayerBoard(player);
    activePlayerSide.appendChild(activePlayerBoard);
    return activePlayerSide;
}

function getOppPlayerSide(oppPlayer) {
    const oppPlayerSide = generateDiv("opp-player-div");
    const oppPlayerHeading = generateHeading("opp-player-heading");
    oppPlayerHeading.textContent = `${oppPlayer.name} Board`;
    oppPlayerSide.appendChild(oppPlayerHeading);
    oppPlayerSide.style.backgroundColor = getColor(oppPlayer.color);
    const oppPlayerBoard = buildOppPlayerBoard(oppPlayer);
    oppPlayerSide.appendChild(oppPlayerBoard);
    return oppPlayerSide;
}

function displayPlayerBoard(player,oppPlayer) {
    const boardDiv = generateDiv("board-div");
    const activePlayerSide = getActivePlayerSide(player);
    const oppPlayerSide = getOppPlayerSide(oppPlayer);
    boardDiv.appendChild(activePlayerSide);
    boardDiv.appendChild(oppPlayerSide);
    return boardDiv;
}

export default displayPlayerBoard;