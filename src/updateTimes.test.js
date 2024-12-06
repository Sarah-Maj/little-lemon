import { updateTimes } from '../reducers/bookingReducer';  // Example path for updateTimes
import { fetchAPI } from '../utils/api';  // Assuming fetchAPI is used in updateTimes

jest.mock('../utils/api');  // Mock fetchAPI for this test

describe('updateTimes', () => {
    it('should update available times based on the selected date', () => {
        const mockTimes = ['17:00', '17:30', '18:00'];
        fetchAPI.mockReturnValue(mockTimes);

        const state = { availableTimes: [] };
        const action = { type: 'UPDATE_TIMES', date: new Date() };

        const newState = updateTimes(state, action);

        expect(fetchAPI).toHaveBeenCalledWith(action.date);
        expect(newState.availableTimes).toEqual(mockTimes);
    });
});