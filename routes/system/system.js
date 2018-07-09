const os = require('os');
const {promisify} = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

module.exports = function(server) {
    server.get('/license', (req, res, next) => {
        readFile('./LICENSE', 'utf8')
            .then((data) => {
                res.send(data);
                return next();
            });
    });

    server.get('/system',
        (req, res, next) => {

            return new Promise((resolve, reject) => {
                let timeNow = new Date().getTime();
                setTimeout(() => {
                    resolve(new Date().getTime() - timeNow);
                }, 100);
            }).then((data)=> {
                res.send({'System': os.cpus()});
                return next();
            }).catch(() => {
                return next();
            });
        }
    );
};