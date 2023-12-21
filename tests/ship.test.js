import { experiments } from "webpack";
import newShip from "../src/ship";


// Initialize 1 length v ship @ (1,1)
test("Ship : init 1 length v ship @ (1,1)", () => {
    expect(newShip(1,1,1,"vertical",[])).toEqual(
        {
            length : 1,
            headX : 1,
            headY : 1,
            alignment : "vertical",
            shipCords : [[1,1]],
            hits : 0
        }
    );
})

// Initialize 2 length v ship @ (1,1)
test("Ship : init 2 length v ship @ (1,1)", () => {
    expect(newShip(2,1,1,"vertical",[])).toEqual(
        {
            length : 2,
            headX : 1,
            headY : 1,
            alignment : "vertical",
            shipCords : [[1,1],[1,2]],
            hits : 0
        }
    );
});

// Initialize 2 length h ship @ (1,1)
test("Ship : init 2 length h ship @ (1,1)", () => {
    expect(newShip(2,1,1,"horizontal",[])).toEqual(
        {
            length : 2,
            headX : 1,
            headY : 1,
            alignment : "horizontal",
            shipCords : [[1,1],[2,1]],
            hits : 0
        }
    );
});

// Initialize 3 length v ship @ (1,1)
test("Ship : init 3 length v ship @ (1,1)", () => {
    expect(newShip(3,1,1,"vertical",[])).toEqual(
        {
            length : 3,
            headX : 1,
            headY : 1,
            alignment : "vertical",
            shipCords : [[1,1],[1,2],[1,3]],
            hits : 0
        }
    );
});

// Initialize 3 length h ship @ (1,1)
test("Ship : init 3 length h ship @ (1,1)", () => {
    expect(newShip(3,1,1,"horizontal",[])).toEqual(
        {
            length : 3,
            headX : 1,
            headY : 1,
            alignment : "horizontal",
            shipCords : [[1,1],[2,1],[3,1]],
            hits : 0
        }
    );
});

// Ship of length less than 1
test("Ship : init ship length < 1", () => {
    expect(() => {
        newShip(-1,1,1,"vertical",[])
    }).toThrow();
});

// Ship of length greater than 3
test("Ship : init ship length > 3", () => {
    expect(() => {
        newShip(4,1,1,"horizontal",[])
    }).toThrow();
});

// Ship created beyond 9
test("Ship : init ship beyond (x,9)",() => {
    expect(() => {
        newShip(3,10,1,"horizontal",[])
    }).toThrow();
});

test("Ship : init ship beyond (9,y)",() => {
    expect(() => {
        newShip(3,1,10,"horizontal",[])
    }).toThrow();
});

// Ship created below 0
test("Ship : init ship below 1X",() => {
    expect(() => {
        newShip(2,-1,5,"vertical",[])
    }).toThrow();
});

test("Ship : init ship below 1Y",() => {
    expect(() => {
        newShip(2,5,-1,"vertical",[])
    }).toThrow();
});

// Alignment wrong
test("Ship : init alignment must be horizontal or vertical",() => {
    expect(() => {
        newShip(2,5,5,"meow",[])
    }).toThrow();
});

// Ship conflicting with other ship
test("Ship : init ship conflict",() => {
    expect(() => {
        newShip(2,5,5,"meow",[[5,5]])
    }).toThrow();
});

// getHit increases hits by one
test("Ship : getHit increases hits by one", () => {
    const ship = newShip(2,1,1,"vertical",[]);
    ship.getHit();
    expect(ship.hits).toBe(1);
});

// isSunk
test("ship : sunk condition",() => {
    const ship = newShip(1,1,1,"vertical",[]);
    ship.getHit();
    expect(ship.isSunk()).toBe(true);
});

//Updating x and y coordinates
test("ship : updating x and y",() => {
    const ship = newShip(1,1,1,"vertical",[]);
    ship.updateCords(2,2,ship.alignment);
    expect(ship).toEqual(
        {
            length : 1,
            headX : 2,
            headY : 2,
            alignment : "vertical",
            shipCords : [[2,2]],
            hits : 0
        }
    );
});

test("ship : updating alignment", () => {
    const ship = newShip(2,1,1,"vertical",[]);
    ship.updateCords(1,1,"horizontal");
    expect(ship).toEqual(
        {
            length : 2,
            headX : 1,
            headY : 1,
            alignment : "horizontal",
            shipCords : [[1,1],[2,1]],
            hits : 0
        }
    );
});