import sendRequest from './send-request';
const BASE_URL = '/api/levels';

export function getAll() {
    return sendRequest(BASE_URL);
}