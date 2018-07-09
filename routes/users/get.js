const userRoutes = function (server, Users) {
    return (req, res, next) => {
        Users.findOne({ where: { username:  req.params.name}})
            .then(user => {
                res.send(user);
                return next();
            });
    };
};

module.exports = userRoutes;