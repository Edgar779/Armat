/**swagger url */

const mode = ['local', 'development', 'production'][1];
let apiBase;
switch (mode) {
    case 'local':
        apiBase = 'http://localhost:8081/api';
        break;
    case 'development':
        apiBase = 'https://armat.eachbase.com/api';
        break;
    case 'production':
        apiBase = 'https://armat.org/api';
        break;
    default:
        break;
}

export const API_BASE = apiBase;
