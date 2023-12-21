import checkBoundary from "../src/checkBoundary";

//Moving any ship under -1
test("Check boundary 1 ship to (-1,5)", () => {
    expect(() => {
        checkBoundary(-1,5,"horizontal",1)
    }).toThrow();
});

test("Check boundary 1 ship to (5,-1)", () => {
    expect(() => {
        checkBoundary(5,-1,"vertical",1)
    }).toThrow();
});

//Moving any ship over 9
test("Check boundary 1 ship to (10,4)", () => {
    expect(() => {
        checkBoundary(10,4,"horizontal",1)
    }).toThrow();
});

test("Check boundary 1 ship to (4,10)", () => {
    expect(() => {
        checkBoundary(4,10,"vertical",1)
    }).toThrow();
});


// 2 length ship errors
test("Check boundary vertical 2 ship to (x,9)", () => {
    expect(() => {
        checkBoundary(5,9,"vertical",2);
    }).toThrow();
});

test("Check boundary horizontal 2 ship to (9,y)", () => {
    expect(() => {
        checkBoundary(9,5,"horizontal",2);
    }).toThrow();
});

//3 length ship errors
test("Check boundary vertical 3 length ship to (x,8)", () => {
    expect(() => {
        checkBoundary(5,8,"vertical",3);
    }).toThrow();
});

test("Check boundary vertical 3 length ship to (x,9)", () => {
    expect(() => {
        checkBoundary(5,9,"vertical",3);
    }).toThrow();
});

test("Check boundary horizontal 3 length ship to (8,y)", () => {
    expect(() => {
        checkBoundary(8,5,"horizontal",3);
    }).toThrow();
});

test("Check boundary horizontal 3 length ship to (9,y)", () => {
    expect(() => {
        checkBoundary(9,5,"horizontal",3);
    }).toThrow();
});

// Successful checkBoundary conditions
test("Check 1 moving (5,5)",() => {
    expect(checkBoundary(5,5,"horizontal",1)).toBe(1);
})

test("Check 1 moving (1,1)", () => {
    expect(checkBoundary(1,1,"horizontal",1)).toBe(1);
})

test("Check 1 moving (9,9)", () => {
    expect(checkBoundary(1,1,"horizontal",1)).toBe(1);
})

test("Check 2 moving (5,5)", () => {
    expect(checkBoundary(5,5,"vertical",2)).toBe(1);
})

test("Check 2 moving (1,1)",() => {
    expect(checkBoundary(1,1,"vertical",2)).toBe(1);
})

test("Check 2 moving (1,1)", () => {
    expect(checkBoundary(1,1,"horizontal",2)).toBe(1);
})

test("check 2 moving (8,8) horizontal", () => {
    expect(checkBoundary(8,8,"horizontal",2)).toBe(1);
})

test("check 2 moving (8,8) vertical", () => {
    expect(checkBoundary(8,8,"vertical",2)).toBe(1);
})

test("check 3 moving (7,7) horizontal", () => {
    expect(checkBoundary(7,7,"horizontal",3)).toBe(1);
})

test("check 3 moving (7,7) vertical", () => {
    expect(checkBoundary(7,7,"vertical",3)).toBe(1);
})