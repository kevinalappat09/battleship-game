import generateDiv from "../element/divGen"
import generateButton from "../element/btnGen";
import generateMaterialIcon from "../element/materialIconGen";
import generateHeading from "../element/headingGen";

function init_main_screen_f() {
    const containerDiv = generateDiv("main-screen-container");
    
    const leftDiv = generateDiv("main-left-div");
    const leftDivIconDiv = generateDiv("main-left-icon-div");
    const leftDivIcon = generateMaterialIcon("computer","240px");
    leftDivIconDiv.appendChild(leftDivIcon);
    const leftDivHead = generateHeading("main-left-head");
    leftDivHead.textContent = "Computer";
    const leftDivButton = generateButton("main-left-button");
    leftDivButton.textContent = "Play Against Computer";
    leftDiv.appendChild(leftDivIconDiv);
    leftDiv.appendChild(leftDivHead);
    leftDiv.appendChild(leftDivButton);

    const rightDiv = generateDiv("main-right-div");
    const rightDivIconDiv = generateDiv("main-right-icon-div");
    const rightDivIcon = generateMaterialIcon("person","240px");
    rightDivIconDiv.appendChild(rightDivIcon);
    const rightDivHead = generateHeading("main-right-head");
    rightDivHead.textContent = "Player";
    const rightDivButton = generateButton("main-right-button");
    rightDivButton.textContent = "Play against another player";
    rightDiv.appendChild(rightDivIconDiv);
    rightDiv.appendChild(rightDivHead);
    rightDiv.appendChild(rightDivButton);


    containerDiv.appendChild(leftDiv);
    containerDiv.appendChild(rightDiv);
    return containerDiv;
}

export default init_main_screen_f;