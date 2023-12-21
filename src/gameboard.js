import newShip from "./ship";
import checkBoundary from "./checkBoundary";
import checkShipConflict from "./checkShipConflict";
import getShipCords from "./getShipCords";

class GameBoard {
    constructor() {
        this.ShipArray = [];
        this.hitSpots = [];
        this.occupiedSpots = [];
        initializeShips();
    }

    initializeShips() {
        const ship1 = newShip(1,1,1,"vertical",[]);
        this.ShipArray.push(ship1);
        this.getOccupiedSpots();
        
        const ship2 = newShip(2,4,4,"vertical",this.occupiedSpots);
        this.ShipArray.push(ship2);
        this.getOccupiedSpots();

        const ship3 = newShip(2,4,2,"horizontal",this.occupiedSpots);
        this.ShipArray.push(ship3);
        this.getOccupiedSpots();
        
        const ship4 = newShip(3,7,7,"vertical",this.occupiedSpots);
        this.ShipArray.push(ship4);
        this.getOccupiedSpots();

        const ship5 = newShip(3,1,9,"horizontal",this.occupiedSpots);
        this.ShipArray.push(ship5);
        this.getOccupiedSpots();
    }

    getOccupiedSpots() {
        this.occupiedSpots = [];
        for(ship in this.ShipArray) {
            this.occupiedSpots.push(getShipCords(ship.headX,ship.headY,ship.alignment,ship.length));
        }
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

    // Rotate ship

    // Recieve attack
}

function createNewGameBoard() {
    const gameboard = new GameBoard;
    return gameboard;
}

export default createNewGameBoard;