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

const bodyContainer = document.querySelector(".container");

function displayWinMessage(player) {
    if(player) {
        bodyContainer.innerHTML = "";
        const winMessage = generateHeading("win-message");
        winMessage.style.backgroundColor = player.color;
        winMessage.textContent = `${player.name} has won`;
        bodyContainer.appendChild(winMessage);
    }
}

function init_CPU_game() {
    const player1 = newPlayer("Bingus","red");
    const CPU = newPlayer("CPU","blue");

    bodyContainer.innerHTML = "";
    moveShip(player1,() => {
        moveCPUShips(CPU,() => {
            playCPUGame(player1,CPU,(winner) => {
                displayWinMessage(winner);
            });
        })
        // Make it so that the playCPU game can take a function argument for oncomplete whihc will do as we say it to.
    });
    
    
}

function init_player_game() {
    console.log("Initialzied player game");
    bodyContainer.innerHTML = "";
}

function pregame() {
    bodyContainer.appendChild(init_main_screen_f());
    const mainLeftButton = document.querySelector(".main-left-button");
    const mainRightButton = document.querySelector(".main-right-button");

    mainLeftButton.addEventListener("click",init_CPU_game);
    mainRightButton.addEventListener("click",init_player_game);
}

pregame();