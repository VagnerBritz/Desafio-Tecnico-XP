const userServices = require('../services/userService');
const tokenService = require('../services/tokenService');
const util = require('../services/util');

const userControllers = {
  balance: async (req, res) => {
      const { authorization } = req.headers;
      const { id } = req.params;
      const idT = tokenService.getUserId(authorization, id);
      const balance = await userServices.getBalance(idT);
      balance.Saldo = util.formatBRL(balance.Saldo);
      return res.status(200).json(balance);
  }, 
  getStocks: async (req, res) => {
      const stoks = await userServices.getStoks();
      return res.status(200).json(stoks);
  },
  createAccount: async (req, res) => {
    const data = req.body;
    const create = await userServices.createAccount(data);
    return res.status(201).json(create);
  },
  deleteAccount: async (req, res) => {
    const { authorization } = req.headers;
    const { CodCliente } = req.body;
    const idT = tokenService.getUserId(authorization, CodCliente);
    await userServices.deleteAccount(idT);
    return res.status(204).end();
  },
};
module.exports = userControllers;