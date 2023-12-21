import newShip from "./ship";
import createGameShipObject from "./gameShipObject";
import checkBoundary from "./checkBoundary";
import checkShipConflict from "./checkShipConflict";

class GameBoard {
    //initialize the gameboard with 5 ships at specifcied locations.
    constructor() {
        const ship1 = newShip(1);
        const Ship1Object = createGameShipObject(ship1,1,1,"vertical");
        
        const ship2 = newShip(2);
        const Ship2Object = createGameShipObject(ship2,4,4,"vertical");

        const ship3 = newShip(2);
        const Ship3Object = createGameShipObject(ship3, 4, 2, "horizontal");
        
        const ship4 = newShip(3);
        const Ship4Object = createGameShipObject(ship4,7,7, "vertial");

        const ship5 = newShip(3);
        const Ship5Object = createGameShipObject(ship5, 1,9,"horizontal");
        
        this.ShipArray = [Ship1Object,Ship2Object,Ship3Object,Ship4Object,Ship5Object];
        this.hitSpots = [];
    }

    moveShip(shipNo,newX,newY) {
        if(checkBoundary(newX,newY,this.ShipArray[shipNo-1].alignment) === 1,this.ShipArray[shipNo-1].ship.length) {
            const occCords = [];
            // TODO - Logic for getting the occupied cordinates of the ship
            if(checkShipConflict(newX,newY,this.ShipArray[shipNo-1].alignment,this.ShipArray[shipNo-1].ship.length,occCords) === 0) {
                // update the coordinates of the ship
                // update the occupied ships coordinate array
            }
        }
        // update the coordinates of the ship.
        // update the occupied heatmap
        this.ShipArray[shipNo-1].updateCords(newX,newY);
    }
}

function createNewGameBoard() {
    const gameboard = new GameBoard;
    return gameboard;
}

export default createNewGameBoard;