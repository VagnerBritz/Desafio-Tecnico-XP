const userServices = require('../services/userService');
const tokenService = require('../services/tokenService');

const userControllers = {
    balance: async (req, res) => {
        // const {id} = req.params;
        const { authorization } = req.headers;
        const id = tokenService.getUserId(authorization);

        const balance = await userServices.getBalance(id);
        return res.status(200).json(balance);
    }, 
    getStocks: async (req, res) => {
        const stoks = await userServices.getStoks();
        return res.status(200).json(stoks);
    },
};
module.exports = userControllers;