module.exports = function(server, Users) {
    server.get('/users/:name', require('./get')(server, Users));
};


