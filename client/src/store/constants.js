const mode = ['local', 'development', 'production'][1];

export const API_BASE = {
    local: 'http://localhost:8081/api',
    development: 'https://armat.eachbase.com/api',
    production: 'https://armat.org/api',
}[mode];
