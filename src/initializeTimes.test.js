import { initializeTimes } from '../utils/api'; // Import the actual function
import { fetchAPI } from '../utils/api';  // Assuming fetchAPI is in api.js

jest.mock('../utils/api');  // Mock the fetchAPI function

describe('initializeTimes', () => {
    it('should return available times from fetchAPI', () => {
        const mockTimes = ['17:00', '17:30', '18:00', '18:30'];
        fetchAPI.mockReturnValue(mockTimes);

        const date = new Date();
        const result = initializeTimes(date);

        expect(fetchAPI).toHaveBeenCalledWith(date);
        expect(result).toEqual(mockTimes);
    });
});