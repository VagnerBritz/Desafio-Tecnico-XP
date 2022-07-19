const userServices = require('../services/authService');
const tokenService = require('../services/tokenService');
const authControllers = {

    login: async (req, res) => {
        const {email, password} = req.body;
        const token = await userServices.login(email, password);

        return res.status(200).json(token);
    },

    validateToken: (req, _res, next) => {
        const { authorization } = req.headers;
        tokenService.validate(authorization);

        next();
    }
};

module.exports = authControllers;