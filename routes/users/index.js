module.exports = function(server, Users) {
    server.get('/users/:name', require('./get')(server, Users));
    server.post('/users', require('./post')(server, Users));
};


