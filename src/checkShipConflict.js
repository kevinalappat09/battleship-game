// Checks whether the new x and new y are occupied by another ship.
import getShipCords from "./getShipCords";

// Returns 1 if any one element from expectCords exists in occupiedCords
function checkShipConflict(newX,newY,newAlign, length, occupiedCords) {

    // Get the expected coordinates that the ship will consume.
    const expectedCords = getShipCords(newX,newY,newAlign,length);

    // If the expected coordinates are already occupied by something then return 1, else return 0
    return occupiedCords.some(element => {
        return expectedCords.some(expectedElement => {
            return JSON.stringify(element) === JSON.stringify(expectedElement);
        });
    }) ? 1 : 0;
}

export default checkShipConflict;