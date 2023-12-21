import checkBoundary from "./checkBoundary";
import checkShipConflict from "./checkShipConflict";
import getShipCords from "./getShipCords";

class Ship {
    constructor(length,headX,headY,alignment) {
        this.length = length;
        this.headX = headX;
        this.headY = headY;
        this.alignment = alignment;
        this.shipCords = getShipCords(this.headX,this.headY,this.alignment,this.length);
        this.hits = 0;
    }

    getHit() {
        this.hits++;
    }

    // Update coords
    updateCords(newHeadX,newHeadY,newAlign) {
        this.headX = newHeadX;
        this.headY = newHeadY;
        this.alignment = newAlign;
        this.shipCords = getShipCords(this.headX,this.headY,this.alignment,this.length);
    }

    isSunk() {
        if(this.hits === this.length) {
            return true;
        } else {
            return false;
        }
    }
}

function newShip(length,headX,headY,alignment, occupiedCords) {
    if(length < 1) {
        throw("Ship is too small");
    }
    if(length > 3) {
        throw("Ship is too big");
    }
    if(checkBoundary(headX,headY,alignment,length) !== 1) {
        throw("Boundary exception");
    }
    if(checkShipConflict(headX,headY,alignment,length,occupiedCords) === 1) {
        throw("Ship conflict error");
    }
    if(alignment != "vertical" && alignment != "horizontal") {
        throw("Alignment must be either vertical or horizontal");
    }
    const newShip = new Ship(length, headX,headY,alignment);
    return newShip;
}


export default newShip;