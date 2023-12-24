// Main screen appears allowing the user to choose between computer or player v player - DONE 
// Based on the users choice the next screen is shown where the user or users can choose their name and color
// Once the start game button is pressed the game
// Let player one place their ships
// Once the player one is done placing their ships
// If computer -> automate the process of placing ships
// If another player -> let player two place their ships.
// Begin the game loop until one of the players gameboards all sunk function returns true.
// when that happens we need to reset the game again by mostly making new players

import init_main_screen_f from "./ui/screen/init_main_screen";
import "./styles.css";
import playCPUGame from "./game";
import newPlayer from "./player";
import moveShip from "./moveShip";
import moveCPUShips from "./moveCPUShips";
import generateHeading from "./ui/element/headingGen";
import getColor from "./getColor";
import generateButton from "./ui/element/btnGen";
import generateDiv from "./ui/element/divGen";

const bodyContainer = document.querySelector(".container");

function displayWinMessage(player) {
    if(player) {
        bodyContainer.innerHTML = "";
        const winContainer = generateDiv("win-container");
        winContainer.style.backgroundColor = getColor(player.color);

        const winMessage = generateHeading("win-message");
        winMessage.textContent = `${player.name} has won`;
        winContainer.appendChild(winMessage);

        const winButton = generateButton("win-button");
        winButton.style.backgroundColor = getColor(player.color);
        winButton.textContent = `Go Back Home`;
        winButton.addEventListener("click",pregame);
        winContainer.appendChild(winButton);

        bodyContainer.appendChild(winContainer);
    }
}

function init_CPU_game() {
    const player1 = newPlayer("Bingus","pink");
    const CPU = newPlayer("CPU","blue");

    bodyContainer.innerHTML = "";
    moveShip(player1,() => {
        moveCPUShips(CPU,() => {
            playCPUGame(player1,CPU,(winner) => {
                displayWinMessage(winner);
            });
        })
    });
    
    
}

function init_player_game() {
    const player1 = newPlayer("Bingus","pink");
    const player2 = newPlayer("Spoingus","blue");

    bodyContainer.innerHTML = "";
    moveShip(player1,() => {
        moveShip(player2,() => {
            playCPUGame(player1,player2,(winner) => {
                displayWinMessage(winner);
            });
        })
    });
}

function pregame() {
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild(init_main_screen_f());
    const mainLeftButton = document.querySelector(".main-left-button");
    const mainRightButton = document.querySelector(".main-right-button");

    mainLeftButton.addEventListener("click",init_CPU_game);
    mainRightButton.addEventListener("click",init_player_game);
}

pregame();