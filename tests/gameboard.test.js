import newGameBoard from "../src/gameboard";

// Check correct initialization
test("Correct initialization",() => {
    const gb = newGameBoard();
    expect(gb).toEqual(
        {
            shipArray : [
                {
                    length : 1,
                    headX : 1,
                    headY : 1,
                    alignment : "vertical",
                    shipCords : [[1,1]],
                    hits : 0
                },
                {
                    length : 2,
                    headX : 4,
                    headY : 4,
                    alignment : "vertical",
                    shipCords : [[4,4],[4,5]],
                    hits : 0
                },
                {
                    length : 2,
                    headX : 4,
                    headY : 2,
                    alignment : "horizontal",
                    shipCords : [[4,2],[5,2]],
                    hits : 0
                },
                {
                    length : 3,
                    headX : 7,
                    headY : 7,
                    alignment : "vertical",
                    shipCords : [[7,7],[7,8],[7,9]],
                    hits : 0
                },
                {
                    length : 3,
                    headX : 1,
                    headY : 9,
                    alignment : "horizontal",
                    shipCords : [[1,9],[2,9],[3,9]],
                    hits : 0
                },
            ],
            hitSpots : [],
            occupiedSpots : [
                [1,1],
                [4,4],[4,5],
                [4,2],[5,2],
                [7,7],[7,8],[7,9],
                [1,9],[2,9],[3,9]
            ]
        }
    )
});

//Moving a ship out of bounds
test("Gameboard : Moving a ship below -1X",() => {
    const gb = newGameBoard();
    expect(() => {
        gb.moveShip(1,-1,2);
    }).toThrow();
});

test("Gameboard : Move a ship below -1Y", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.moveShip(1,1,-1);
    }).toThrow();
});

test("Gameboard : Move ship above 9", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.moveShip(1,10,1);
    }).toThrow();
});

test("Gameboard : Move ship above 9Y", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.moveShip(1,1,10);
    }).toThrow();
})



// Move ship on another ship
test("Gameboard : Move ship on another", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.moveShip(1,4,4);
    }).toThrow();
})

//Move ship on top of itself (same position)
test("Gameboard : Move ship on itself", () => {
    const gb = newGameBoard();
    gb.moveShip(1,1,1);
    expect(gb).toEqual(
        {
            shipArray : [
                {
                    length : 1,
                    headX : 1,
                    headY : 1,
                    alignment : "vertical",
                    shipCords : [[1,1]],
                    hits : 0
                },
                {
                    length : 2,
                    headX : 4,
                    headY : 4,
                    alignment : "vertical",
                    shipCords : [[4,4],[4,5]],
                    hits : 0
                },
                {
                    length : 2,
                    headX : 4,
                    headY : 2,
                    alignment : "horizontal",
                    shipCords : [[4,2],[5,2]],
                    hits : 0
                },
                {
                    length : 3,
                    headX : 7,
                    headY : 7,
                    alignment : "vertical",
                    shipCords : [[7,7],[7,8],[7,9]],
                    hits : 0
                },
                {
                    length : 3,
                    headX : 1,
                    headY : 9,
                    alignment : "horizontal",
                    shipCords : [[1,9],[2,9],[3,9]],
                    hits : 0
                },
            ],
            hitSpots : [],
            occupiedSpots : [
                [1,1],
                [4,4],[4,5],
                [4,2],[5,2],
                [7,7],[7,8],[7,9],
                [1,9],[2,9],[3,9]
            ]
        }
    )
})

// Successful move
test("Gameboard : Move ship on itself", () => {
    const gb = newGameBoard();
    gb.moveShip(1,5,5);
    expect(gb).toEqual(
        {
            shipArray : [
                {
                    length : 1,
                    headX : 5,
                    headY : 5,
                    alignment : "vertical",
                    shipCords : [[5,5]],
                    hits : 0
                },
                {
                    length : 2,
                    headX : 4,
                    headY : 4,
                    alignment : "vertical",
                    shipCords : [[4,4],[4,5]],
                    hits : 0
                },
                {
                    length : 2,
                    headX : 4,
                    headY : 2,
                    alignment : "horizontal",
                    shipCords : [[4,2],[5,2]],
                    hits : 0
                },
                {
                    length : 3,
                    headX : 7,
                    headY : 7,
                    alignment : "vertical",
                    shipCords : [[7,7],[7,8],[7,9]],
                    hits : 0
                },
                {
                    length : 3,
                    headX : 1,
                    headY : 9,
                    alignment : "horizontal",
                    shipCords : [[1,9],[2,9],[3,9]],
                    hits : 0
                },
            ],
            hitSpots : [],
            occupiedSpots : [
                [5,5],
                [4,4],[4,5],
                [4,2],[5,2],
                [7,7],[7,8],[7,9],
                [1,9],[2,9],[3,9]
            ]
        }
    )
})


// Rotate ship

// Recieve attack