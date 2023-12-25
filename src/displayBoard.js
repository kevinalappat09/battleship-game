import getColor from "./getColor";
import generateDiv from "./ui/element/divGen";
import generateHeading from "./ui/element/headingGen";
import errorHandler from "./errorHandler";

// Builds the active player board and returns.
function buildActivePlayerBoard(player) {
    // Generates div for the player board.
    const activePlayerBoard = generateDiv("active-player-board");

    // For loop for adding each grid square (9x9)
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            // Generates the div for the grid square.
            const gridSquare = generateDiv("active-player-grid-square");

            
            if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // Color the square : if the ship is occupied and hit -> gold color
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            
            } else if(player.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // Color the square : missed hit -> black
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            } else if(player.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // Color the square : only the ship is present but not hit -> gray.
                gridSquare.style.backgroundColor = "var(--set-ship-gray)";
            }

            // If player clicks own board -> give error
            gridSquare.addEventListener("click",() => {
                errorHandler("Clicking on your own board is futile.")
            });

            // Appends the grid square to the board.
            activePlayerBoard.appendChild(gridSquare);
        }
    }

    // Returns the board.
    return activePlayerBoard;
}

// Builds and returns the opponent board.
function buildOppPlayerBoard(oppPlayer) {

    // Generate div to hold the opp player board.
    const oppPlayerBoard = generateDiv("opp-player-board");

    // For loop for adding each grid square (9x9)
    for(let i=1; i<10; i++) {
        for(let j=1;j<10;j++) {
            // Generates a div for each grid square.
            const gridSquare = generateDiv("opp-player-grid-square");
            if(oppPlayer.gameboard.occupiedSpots.some(coord => coord[0] === i && coord[1] === j) && oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // If the square has been hit and was occupied -> gold
                gridSquare.style.backgroundColor = "var(--ship-hit-gold)";
            } else if(oppPlayer.gameboard.hitSpots.some(coord => coord[0] === i && coord[1] === j)) {
                // if the square was not occupied but hit -> black
                gridSquare.style.backgroundColor = "var(--missed-hit-black)";
            }

            // Append the square to the board.
            oppPlayerBoard.appendChild(gridSquare);
        }
    }

    // Return the board.
    return oppPlayerBoard;
}

function getActivePlayerSide(player) {
    // Creates an active player div.
    const activePlayerSide = generateDiv("active-player-div");
    activePlayerSide.style.backgroundColor = getColor(player.color);

    // Heading for the active player with their name.
    const activePlayerHeading = generateHeading("active-player-heading");
    activePlayerHeading.textContent = `${player.name} Board`;
    activePlayerSide.appendChild(activePlayerHeading);
    
    // Generates active player board.
    const activePlayerBoard = buildActivePlayerBoard(player);
    activePlayerSide.appendChild(activePlayerBoard);

    // Returns the active player board.
    return activePlayerSide;
}

function getOppPlayerSide(oppPlayer) {
    // Creates div for opponent side.
    const oppPlayerSide = generateDiv("opp-player-div");
    oppPlayerSide.style.backgroundColor = getColor(oppPlayer.color);

    // Heading for the opponent player with thier name
    const oppPlayerHeading = generateHeading("opp-player-heading");
    oppPlayerHeading.textContent = `${oppPlayer.name} Board`;
    oppPlayerSide.appendChild(oppPlayerHeading);
    
    // Generate opp player boad.
    const oppPlayerBoard = buildOppPlayerBoard(oppPlayer);
    oppPlayerSide.appendChild(oppPlayerBoard);

    // Return the board.
    return oppPlayerSide;
}

function displayPlayerBoard(player,oppPlayer) {
    // Create board display
    const boardDiv = generateDiv("board-div");

    // Get the active and opponent player side and append
    const activePlayerSide = getActivePlayerSide(player);
    const oppPlayerSide = getOppPlayerSide(oppPlayer);
    boardDiv.appendChild(activePlayerSide);
    boardDiv.appendChild(oppPlayerSide);
    return boardDiv;
}

export default displayPlayerBoard;