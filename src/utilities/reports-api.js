import sendRequest from './send-request';
const BASE_URL = '/api/reports';

// Retrieve a NOT submitted report for the logged-in user!
export function getNotReadyHabits() {
    return sendRequest(`${BASE_URL}/notReadyHabits`);
}

export function addHabitToNotReadyHabits(habitId) {
    return sendRequest(`${BASE_URL}/notReadyHabits/habits/${habitId}`, 'POST');
}

export function setHabitQtyInNotReadyHabits(habitId, newQty) {
    return sendRequest(`${BASE_URL}/notReadyHabits/qty`, 'PUT', {habitId, newQty});
}

export function submitReport() {
    return sendRequest(`${BASE_URL}/notReadyHabits/submitReport`, 'POST');
}