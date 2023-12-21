class GameShipObject {
    constructor(ship,xCord,yCord,alignment) {
        this.ship = ship;
        this.xCord = xCord;
        this.yCord = yCord;
        this.alignment = alignment;
        this.shipCords = [];

        for(let i=0; i<ship.length; i++) {
            if(alignment === "vertical") {
                this.shipCords.push([xCord,yCord+i]);
            } else if(alignment === "horizontal"){
                this.shipCords.push([xCord+i,yCord]);
            }
        }
    }

    updateCords(xCord,yCord) {
        if(this.ship.length === 2) {
            if(yCord === 9 && this.ship.alignment === "vertical") {
                throw("2 length ship cannot be on (x,9)");
            } else if(XCord === 9 && this.ship.alignment === "horizontal") {
                throw("2 length ship cannot be on (9,y)");
            } else {
                this.xCord = xCord;
                this.yCord = yCord;
            }
        }

        this.shipCords = [];
        for(let i=0;i<this.ship.length;i++) {
            if(this.alignment === "vertical") {
                this.shipCords.push([xCord,yCord+i]);
            } else if(this.alignment === "horizontal") {
                this.shipCords.push([xCord +i,yCord]);
            }
        }
    }
}

function createGameShipObject(ship,xCord,yCord,align) {
    const newShipObject = new GameShipObject(ship,xCord,yCord,align);
    return newShipObject;
}


export default createGameShipObject;