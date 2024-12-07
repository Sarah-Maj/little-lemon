import { updateTimes } from "../reducers/bookingReducer";
import { fetchAPI } from "../utils/api";

jest.mock("../utils/api");

describe("updateTimes Reducer", () => {
    it("Updates available times for a given date", () => {
        const mockTimes = ["17:00", "17:30", "18:00"];
        fetchAPI.mockReturnValue(mockTimes);

        const state = { availableTimes: [] };
        const action = { type: "UPDATE_TIMES", date: new Date() };

        const newState = updateTimes(state, action);

        expect(fetchAPI).toHaveBeenCalledWith(action.date);
        expect(newState.availableTimes).toEqual(mockTimes);
    });
});