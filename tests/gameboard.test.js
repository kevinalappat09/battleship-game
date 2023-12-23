import newGameBoard from "../src/gameboard";

// Check correct initialization
test("Correct initialization",() => {
    const gb = newGameBoard();
    expect(gb).toEqual(
        {
            unsunkShips : [
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
            sunkShips : [],
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
            unsunkShips : [
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
            sunkShips : [],
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
            unsunkShips : [
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
            sunkShips : [],
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
// Rotating out of boundary - 2 cases
test("Gameboard : rotating ship out of bounds (vertical)", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.rotateShip(5,"vertical");
    }).toThrow();
});

test("Gameboard : rotating ship out of bounds (horizontal)", () => {
    const gb = newGameBoard();
    gb.moveShip(2,9,4);
    expect(() => {
        gb.rotateShip(2,"horizontal");
    }).toThrow();
})

// Rotating on another ship
test("Gameboard : rotating ship on another ship", () => {
    const gb = newGameBoard();
    gb.moveShip(5,7,6);
    expect(() => {
        gb.rotateShip(5,"vertical");
    }).toThrow();
})

// Successful rotation
test("Gameboard : succefull rotation case", () => {
    const gb = newGameBoard();
    gb.rotateShip(3,"vertical");
    expect(gb).toEqual(
        {
            unsunkShips : [
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
                    alignment : "vertical",
                    shipCords : [[4,2],[4,3]],
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
            sunkShips : [],
            occupiedSpots : [
                [1,1],
                [4,4],[4,5],
                [4,2],[4,3],
                [7,7],[7,8],[7,9],
                [1,9],[2,9],[3,9]
            ]
        }
    )
})


// Recieve attack : out of bounds
test("Attack : coordinates out of X < 0", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.receiveAttack(-1,2)
    }).toThrow();   
});

test("Attack :  coordinates out of Y < 0", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.receiveAttack(2,-1);
    }).toThrow();
});

test("Attack : coordinates out of X > 9", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.receiveAttack(10,4);
    }).toThrow();
});

test("Attack : coordinates out of Y > 9", () => {
    const gb = newGameBoard();
    expect(() => {
        gb.receiveAttack(4,10);
    }).toThrow();
});

//Recieve attack : already hit.
test("Attack : coordinate already hit", () => {
    const gb = newGameBoard();
    gb.hitSpots.push([1,1]);
    expect(() => {
        gb.receiveAttack(1,1);
    }).toThrow();
});

//Recieve attack : adding the coordinate to hit spots array
test("Attack : adding the coordinate for hit spots", () => {
    const gb = newGameBoard();
    gb.receiveAttack(2,1);
    expect(gb.hitSpots).toEqual(
        [
            [2,1]
        ]
    );
});

// Test if unsunk ship hit increases on attack
test("Attack : unsunk ship", () => {
    const gb = newGameBoard();
    gb.receiveAttack(4,4);
    expect(gb).toEqual(
        {
            unsunkShips : [
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
                    hits : 1
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
            hitSpots : [[4,4]],
            sunkShips : [],
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

// Attacking 1 ship and sinking it
test("Attacking : ship that will sink attacked", () => {
    const gb = newGameBoard();
    gb.receiveAttack(1,1);
    expect(gb).toEqual(
        {
            unsunkShips : [
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
            hitSpots : [[1,1]],
            sunkShips : [
                {
                    length : 1,
                    headX : 1,
                    headY : 1,
                    alignment : "vertical",
                    shipCords : [[1,1]],
                    hits : 1
                }
            ],
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

// Attacking two ship twice and sinking it
test("Attack : 2 ship twice and sink", () => {
    const gb = newGameBoard();
    gb.receiveAttack(4,4);
    gb.receiveAttack(4,5);
    expect(gb).toEqual(
        {
            unsunkShips : [
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
            hitSpots : [[4,4],[4,5]],
            sunkShips : [
                {
                    length : 2,
                    headX : 4,
                    headY : 4,
                    alignment : "vertical",
                    shipCords : [[4,4],[4,5]],
                    hits : 2
                }
            ],
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