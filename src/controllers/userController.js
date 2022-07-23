const userServices = require('../services/userService');
const tokenService = require('../services/tokenService');

const userControllers = {
    balance: async (req, res) => {
        const { authorization } = req.headers;
        const id = tokenService.getUserId(authorization);

        const balance = await userServices.getBalance(id);
        return res.status(200).json(balance);
    }, 
    getStocks: async (req, res) => {
        const stoks = await userServices.getStoks();
        return res.status(200).json(stoks);
    },
    createAccount: async (req, res) => {
      const a = 1;
      return res.status(201).end(a);
    },
    deleteAccount: async (req, res) => {
      const { authorization } = req.headers;
      const id = tokenService.getUserId(authorization);
      await userServices.deleteAccount(id);
      return res.status(202).end();
    },
};
module.exports = userControllers;