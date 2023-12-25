import errorHandler from "./errorHandler";
function checkBoundary(newX, newY, newAlign, length) {

    // If x is less than 0 or greater than 9 then throw an error.
    if(newX < 0) {
        errorHandler("X cannot be under zero");
        throw("X Under 0");
    } else if(newX > 9) {
        errorHandler("X cannot be higher than nine");
        throw("X over 9");
    }

    if(newY < 0) {
        errorHandler("Y cannot be under zero")
        throw("Y under 0");
    } else if(newY > 9) {
        errorHandler("Y cannot be higher than 9")
        throw("Y  over 9");
    }

    // If boundary conditions met and lenght is 1 then return 1.
    if(length === 1) {
        return 1;
    }
    
    // Check based on alignment.
    if(newAlign === "vertical") {
        if(length === 2) {
            if(newY === 9) {
                errorHandler("2 length vertical ship cannot be placed & y=9");
                throw("Vertical 2 Length Boundary: Y @ 9 error");
            } 
            return 1;
        } else if(length === 3) {
            if(newY === 8 || newY === 9) {
                errorHandler("Vertical 3 length ship cannot be placed @ y=8");
                throw("Vertical 3 length Boundary: Y @ 8 or 9 error");
            }
            return 1;
        } else {
            errorHandler("Something went wrong from our side. Sorry :)");
            throw("Ship cannot be greater than 3");
        }
    } else if(newAlign === "horizontal") {
        if(length === 2) {
            if(newX === 9) {
                errorHandler("Horizontal 2 length ship cannot be placed @ x=9");
                throw("Horizontal 2 length Boundary: X @ 9 error");
            }
            return 1;
        } else if( length === 3) {
            if(newX === 8 || newX === 9) {
                errorHandler("Horizontal 3 length ship cannot be placed @ x=8 or x=9");
                throw("Horizontal 3 length Boundary: X @ 8 or 9 error");
            }
            return 1;
        } else {
            errorHandler("Something went wrong from our side. Sorry :)");
            throw("Ship cannot be greater than 3");
        }
    } else {
        errorHandler("The alignment provided is wrong");
        throw("Alignment error : Write the correct new alignment");
    }
}

export default checkBoundary; {

}