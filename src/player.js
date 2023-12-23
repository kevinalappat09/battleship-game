import newGameBoard from "./gameboard";

class player {
    constructor(name,color) {
        this.name = name;
        this.color = color;
        this.gameboard = newGameBoard();
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getColor() {
        return this.color;
    }

    setColor(newColor) {
        this.color = newColor;
    }


}

function newPlayer(name,color) {
    const createdPlayer = new player(name,color);
    return createdPlayer;
}

export default newPlayer;