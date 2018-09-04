const ApiResponse = require('../../lib/api/ApiResponse');

const userRoutes = function (server, Users) {
    return (req, res, next) => {
        Users.create({
            username: req.params.username,
            email: req.params.email,
            password: req.params.password,
            employee: req.params.employee,
            default_module: req.params.default_module,
            user_level: req.params.user_level,
            user_roles: req.params.user_roles,
            last_login: new Date(),
            last_update: new Date(),
            created: new Date(),
            login_hash: null,
            lang: req.params.lang,
        }).then(user => {
            res.send(
                ApiResponse.HTTP_201,
                new ApiResponse(ApiResponse.STATUS_SUCCESS, user).getJSON()
            );
            return next();
        }).catch(error => {
            res.send(
                ApiResponse.HTTP_500,
                null
            );
            return next();
        });
    };
};

module.exports = userRoutes;