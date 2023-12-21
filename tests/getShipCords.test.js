import getShipCords from "../src/getShipCords";

// Test 1 length h ship @ (1,1) 
test("GetShipCords : 1 length h ship @ (1,1)",() => {
    expect(getShipCords(1,1,"horizontal",1)).toEqual([[1,1]]);
});

// Test 1 length v ship @ (1,1)
test("GetShipCords : 1 length v ship @ (1,1)", () => {
    expect(getShipCords(1,1,"vertical",1)).toEqual([[1,1]]);
});

// Test 2 length h ship @ (1,1) => {[1,1], [2,1]}
test("GetShipCords : 2 length h ship @ (1,1)", () => {
    expect(getShipCords(1,1,"horizontal",2)).toEqual([[1,1],[2,1]]);
});

// Test 2 length v ship @ (1,1) => {[1,1], [1,2]}
test("GetShipCords : 2 length v ship @ (1,1)", () => {
    expect(getShipCords(1,1,"vertical",2)).toEqual([[1,1],[1,2]]);
});

// Test 3 length h ship @ (1,1) => {[1,1],[2,1],[3,1]}
test("GetShipCords : 3 length h ship @ (1,1)", () => {
    expect(getShipCords(1,1,"horizontal",3)).toEqual([[1,1],[2,1],[3,1]]);
});

// Test 3 length v ship @ (1,1) => {[1,1],[1,2],[1,3]}
test("GetShipCords : 3 length v ship @ (1,1)", () => {
    expect(getShipCords(1,1,"vertical",3)).toEqual([[1,1],[1,2],[1,3]]);
});