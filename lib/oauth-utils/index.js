function getBearerToken(req) {
    let auth;
    if (!req.headers || !(auth = req.headers.authorization)) {
        return null;
    }
    let parts = auth.split(' ');
    if (2 > parts.length) return null;
    let schema = parts.shift().toLowerCase();
    let token = parts.join(' ');
    if ('bearer' != schema) return null;
    return token;
}

module.exports = {
    getBearerToken: getBearerToken,
};
