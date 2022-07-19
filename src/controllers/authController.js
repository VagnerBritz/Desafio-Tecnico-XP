const userServices = require('../services/authService');

const authControllers = {
    login: async (req, res) => {
        const {email, password} = req.body;
        const token = await userServices.login(email, password);
        return res.status(200).json(token);
    },
};

module.exports = authControllers;