function moveCPUShips(CPU,onComplete) {
    for(let i=0;i<9;i++) {
        const targetShip = Math.floor(Math.random() * 4);
        const actionToPerform = Math.floor(Math.random() * 2) + 1;

        if(actionToPerform === 1) {
            console.log(targetShip,"Move ship");
            const moveToX = Math.floor(Math.random() * 9) + 1;
            const moveToY = Math.floor(Math.random() * 9) + 1;
            try {
                CPU.gameboard.moveShip(targetShip+1,moveToX,moveToY);
            } catch(err) {
                console.log(err);
            }
        } else if(actionToPerform === 2) {
            try {
                if(CPU.gameboard.unsunkShips[targetShip].alignment === "vertical") {
                    CPU.gameboard.rotateShip(targetShip+1,"horizontal");
                } else {
                    CPU.gameboard.rotateShip(targetShip+1,"vertical");
                }
            } catch(err) {
                console.log(err);
            }
        }
    }

    if(onComplete && typeof onComplete === 'function') {
        onComplete();
    }
}

export default moveCPUShips;