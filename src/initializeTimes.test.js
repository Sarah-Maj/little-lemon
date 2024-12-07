import { initializeTimes } from "../utils/api";
import { fetchAPI } from "../utils/api";

jest.mock("../utils/api");

describe("initializeTimes Function", () => {
    it("Fetches available times based on the current date", () => {
        const mockTimes = ["17:00", "17:30", "18:00"];
        fetchAPI.mockReturnValue(mockTimes);

        const date = new Date();
        const result = initializeTimes(date);

        expect(fetchAPI).toHaveBeenCalledWith(date);
        expect(result).toEqual(mockTimes);
    });
});