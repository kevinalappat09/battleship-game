import newPlayer from "../src/player";

// Test correct initialization
test("Correct initialization", () => {
    const np = newPlayer("Bingus","red");

    expect(np).toEqual(
        {
            name : "Bingus",
            color : "red",
            gameboard : {
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
        }
    )
})

test("Get name function", () => {
    const np = newPlayer("Bingus","red");
    expect(np.getName()).toBe("Bingus");
});

test("Get color function", () => {
    const np = newPlayer("Bingus","red");
    expect(np.getColor()).toBe("red");
});

test("Set name function", () => {
    const np = newPlayer("Bingus","red");
    np.setName("Spoingus");
    expect(np.getName()).toBe("Spoingus");
})

test("Set color function", () => {
    const np = newPlayer("Bingus","red");
    np.setColor("blue");
    expect(np.getColor()).toBe("blue");
})