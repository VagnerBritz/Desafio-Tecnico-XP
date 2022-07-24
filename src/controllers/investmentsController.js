const investmentsService = require('../services/investmentsService');
const tokenService = require('../services/tokenService');

const investmentsController = {

    getAll: async (_req, res) => {
        const stoks = await investmentsService.getAll();
        return res.status(200).json(stoks);
    },
    getByName: async (req, res) => {
        const { q } = req.query;
        const stok = await investmentsService.getByName(q);
        return res.status(200).json(stok);
    },
    getById: async (req, res) => {
        const { id } = req.params;
        const stok = await investmentsService.getById(id);
        return res.status(200).json(stok);
    },
    buyStoks: async (req, res) => {
      const { authorization } = req.headers;
      const data = req.body;
      const id = tokenService.getUserId(authorization, data.codCliente);
      data.codCliente = id;
      const buy = await investmentsService.buyStoks(data);
      return res.status(201).json(buy);
    },
    sellStock: async (req, res) => {
      const { codAtivo, qtdeAtivo, codCliente } = req.body;
      const { authorization } = req.headers;
      const id = tokenService.getUserId(authorization, codCliente);
      const data = { codCliente: id, codAtivo, qtdeAtivo };
      const sell = await investmentsService.sellStock(data);
      return res.status(201).json(sell);
    },
    getWalllet: async (req, res) => {
      const { authorization } = req.headers;
      const { id } = req.params;
      const idT = tokenService.getUserId(authorization, id);
      const wallet = await investmentsService.getWallet(idT);
      res.status(200).json(wallet);
    },
};

module.exports = investmentsController;