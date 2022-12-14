import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export async function logIn(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

// Since this is just a simple GET request, there's no payload needed, like userData or credentials.
export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}
