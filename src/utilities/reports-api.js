import sendRequest from './send-request';
const BASE_URL = '/api/reports';

// Retrieve a NOT submitted report for the logged-in user!
export function getNotReadyHabits() {
    return sendRequest(`${BASE_URL}/notFinishedHabits`);
}

export function addHabitToNotReadyHabits(habitId) {
    return sendRequest(`${BASE_URL}/notFinishedHabits/habits/${habitId}`, 'POST');
}