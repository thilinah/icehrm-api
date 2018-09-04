const ApiResponse = require('../../lib/api/ApiResponse');

const userRoutes = function (server, Users) {
    return (req, res, next) => {
        Users.findOne({ where: { username:  req.params.name}})
            .then(user => {
                res.send(
                    ApiResponse.HTTP_200,
                    new ApiResponse(ApiResponse.STATUS_SUCCESS, user, 200).getJSON()
                );
                return next();
            });
    };
};

module.exports = userRoutes;