class Ship {
    constructor(length) {
        if(length < 1) {
            throw("Ship too small");
        }
        if(length > 3) {
            throw("Ship too big");
        } 
        this.length = length;
        this.hits = 0;
    }

    getHit() {
        this.hits++;
    }

    isSunk() {
        if(this.hits === this.length) {
            return 1;
        }
        return 0;
    }
}

function newShip(length) {
    newShip = new Ship(length);
    return newShip;
}

export default newShip;