import {initializeTimes, updateTimes} from "./Main";

test("initializeTimes returns the correct initial times", () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});

test("updateTimes returns the same state provided for an UPDATE_DATE action", () => {
    const state= ["17:00", "18:00", "19:00", "20:00"];
    const action = {type:"UPDATE_DATE", date:"2024-12-01"};
    const updatedState = updateTimes(state, action);

    expect(updatedState).toEqual(state);
});