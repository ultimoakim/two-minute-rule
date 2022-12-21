import sendRequest from './send-request';
const BASE_URL = '/api/habits';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function addHabit(habitData) {
    return sendRequest(BASE_URL, 'POST', habitData);
}