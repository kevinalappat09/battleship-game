import getHitShip from "../src/getHitShip"
import newShip from "../src/ship";

// Head coordinate tests
test("GetHitShip : First ship head in array hit",() => {
    const ship1 = newShip(1,1,1,"vertical",[]);
    const ship2 = newShip(2,4,4,"vertical",[]);
    const ship3 = newShip(2,4,2,"horizontal",[]);
    const shipArray = [ship1,ship2,ship3];
    expect(getHitShip(shipArray,1,1)).toBe(0);
})

test("GetHitShip : Last ship head in array hit",() => {
    const ship1 = newShip(1,1,1,"vertical",[]);
    const ship2 = newShip(2,4,4,"vertical",[]);
    const ship3 = newShip(2,4,2,"horizontal",[]);
    const shipArray = [ship1,ship2,ship3];
    expect(getHitShip(shipArray,4,2)).toBe(2);
})

// Non head coordinate tests
test("GetHitShip : Second ship, second coordinate hit", () => {
    const ship1 = newShip(1,1,1,"vertical",[]);
    const ship2 = newShip(2,4,4,"vertical",[]);
    const ship3 = newShip(2,4,2,"horizontal",[]);
    const shipArray = [ship1,ship2,ship3];
    expect(getHitShip(shipArray,4,5)).toBe(1);
});

// Test if ship not hit
test("GetHitShip : Ship not hit", () => {
    const ship1 = newShip(1,1,1,"vertical",[]);
    const ship2 = newShip(2,4,4,"vertical",[]);
    const ship3 = newShip(2,4,2,"horizontal",[]);
    const shipArray = [ship1,ship2,ship3];
    expect(getHitShip(shipArray,2,2)).toBe(-1);
});