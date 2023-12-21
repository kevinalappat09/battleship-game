import checkShipConflict from "../src/checkShipConflict";

// Test 1 length h ship @ (1,1) with occupied cords (1,1)
test("CheckShipConflict : 1 length h ship @ (1,1) occ[(1,1)]", () => {
    expect(
        checkShipConflict(1,1,"horizontal",1,[[1,1]])
        ).toBe(1);
});

//Test 1 length h ship @ (1,1) with occupied cords (1,2)
test("CheckShipConflict : 1 length h ship @ (1,1) occ([1,2])", () => {
    expect(
        checkShipConflict(1,1,"horizontal",1,[[1,2]])
    ).toBe(0);
});

// Test 2 length h ship @ (1,1) with occupied cords ([1,1],[2,1])
test("CheckShipConflict : 2 length h ship @ (1,1) occ([1,1],[2,1])", () => {
    expect(
        checkShipConflict(1,1,"horizontal",2,[[1,1],[2,1]])
    ).toBe(1);
});

// Test 2 length v ship @ (1,1) with occupied cords ([1,1],[1,2])
test("CheckShipConflict : 2 length v ship @ (1,1) occ([1,1],[1,2]", () => {
    expect(
        checkShipConflict(1,1,"vertical",2,[[1,1],[1,2]])
    ).toBe(1);
});

// Test 2 length h ship @ (1,1) with occupied cords ([3,4],[5,6],[4,5])
test("CheckShipConflict : 2 length h @ (1,1) occ[3,4],[5,6],[4,5])", () => {
    expect(
        checkShipConflict(1,1,"horizontal",2,[[3,4],[5,6],[4,5]])
    ).toBe(0);
});