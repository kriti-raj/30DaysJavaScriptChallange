const API_URL = 'https://picsum.photos/200';
const MAX_RETRIES = 5;

function getEndpoint(path) {
    return `${API_URL}/${path}`;
}

function canRetry(currentRetries) {
    return currentRetries < MAX_RETRIES;
}

module.exports = {
    API_URL,
    MAX_RETRIES,
    getEndpoint,
    canRetry
};
