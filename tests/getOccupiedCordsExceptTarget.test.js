import getOccupiedExceptTarget from "../src/getOccupiedCordsExceptTarget";

test("Get Occupied Except Target : ",() => {
    expect(getOccupiedExceptTarget([[1,1],[1,2],[2,1],[3,1],[4,1]],[[1,2],[1,1]])).toEqual([[2,1],[3,1],[4,1]]);
});