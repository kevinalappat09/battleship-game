function getColor(playerColor) {
    if(playerColor === "red") {
        return "var(--main-screen-red)";
    } else if(playerColor === "blue") {
        return "var(--main-screen-blue)";
    } else if(playerColor === "green") {
        return "var(--main-screen-green)";
    } else if(playerColor === "pink") {
        return "var(--main-screen-pink)"
    }
}

export default getColor;