import newShip from "./ship";
import checkBoundary from "./checkBoundary";
import checkShipConflict from "./checkShipConflict";
import getShipCords from "./getShipCords";
import getOccupiedExceptTarget from "./getOccupiedCordsExceptTarget";

class GameBoard {
    constructor() {
        this.shipArray = [];
        this.hitSpots = [];
        this.occupiedSpots = [];

        const ship1 = newShip(1,1,1,"vertical",[]);
        this.shipArray.push(ship1);
        this.getOccupiedSpots();
        
        const ship2 = newShip(2,4,4,"vertical",this.occupiedSpots);
        this.shipArray.push(ship2);
        this.getOccupiedSpots();

        const ship3 = newShip(2,4,2,"horizontal",this.occupiedSpots);
        this.shipArray.push(ship3);
        this.getOccupiedSpots();
        
        const ship4 = newShip(3,7,7,"vertical",this.occupiedSpots);
        this.shipArray.push(ship4);
        this.getOccupiedSpots();

        const ship5 = newShip(3,1,9,"horizontal",this.occupiedSpots);
        this.shipArray.push(ship5);
        this.getOccupiedSpots();
    }

    getOccupiedSpots() {
        this.occupiedSpots = [];
        for(let i=0;i<this.shipArray.length;i++) {
            const newShipCords = getShipCords(
                this.shipArray[i].headX,
                this.shipArray[i].headY,
                this.shipArray[i].alignment,
                this.shipArray[i].length
            );
            for(let j=0;j<newShipCords.length;j++) {
                this.occupiedSpots.push(newShipCords[j]);
            }
        }
    }


    moveShip(shipNo,newX,newY) {
        let shipAlignment = this.shipArray[shipNo-1].alignment;
        let shipLength = this.shipArray[shipNo-1].length;

        if(checkBoundary(newX,newY,shipAlignment,shipLength) === 1) {
            const remSpots = getOccupiedExceptTarget(this.occupiedSpots,this.shipArray[shipNo-1].shipCords);
            if(checkShipConflict(newX,newY,shipAlignment,shipLength,remSpots) === 0) {
                this.shipArray[shipNo-1].updateCords(newX,newY,shipAlignment);
                this.getOccupiedSpots();
            } else {
                throw("Ship Conflict Error");
            }
        } else {
            throw("Check boundary error");
        }
    }

    // Rotate ship
    rotateShip(shipNo,newAlign) {
        const shipLength = this.shipArray[shipNo-1].length;
        const shipX = this.shipArray[shipNo-1].headX;
        const shipY = this.shipArray[shipNo-1].headY;

        if(checkBoundary(shipX,shipY,newAlign,shipLength) === 1) {
            const remSpots = getOccupiedExceptTarget(this.occupiedSpots,this.shipArray[shipNo-1].shipCords);
            if(checkShipConflict(shipX,shipY,newAlign,shipLength,remSpots) === 0) {
                this.shipArray[shipNo-1].updateCords(shipX, shipY, newAlign);
                this.getOccupiedSpots();
            } else {
                throw("Rotate Ship : Ship conflict error");
            }
        } else {
            throw("Rotate Ship : Check boundary error");
        }
    }

    // Recieve attack
    receiveAttack(toAttackX, toAttackY) {
        // check if coordinate is out of bounds.
        // check if coordinate has already been hit
        // add the coordinate to hitSpots
        // check if the coordinate had a ship on it
        // if yes -> increase the hits, check if the ship sunk -> set a sunk flag on the ship to true
        // if no -> do nothing else.

    }
}

function newGameBoard() {
    const gameboard = new GameBoard;
    return gameboard;
}

export default newGameBoard;