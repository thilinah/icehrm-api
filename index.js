const authUtils = require('./lib/oauth-utils');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('icehrmpro_2400', 'root', 'dev', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

const Users = require('./models/Users')(sequelize, Sequelize);

const restify = require('restify');

const server = restify.createServer();


server.pre(restify.plugins.pre.userAgentConnection());

server.pre((req, res, next) => {
    let token = authUtils.getBearerToken(req);
    console.log(`Auth Token: ${token}`);
    return next();
});

server.get('/', (req, res, next) => {
    res.send({'response': 'IceHrm Api Root'});
    return next();
});

server.head('/', (req, res, next) => {
    res.send({data: 'IceHrm Api Root'});
    return next();
});

require('./routes/users')(server, Users);
require('./routes/system/system')(server)

server.listen(8080, () => {
   console.log(`${server.name} listening on ${server.url}`);
});
