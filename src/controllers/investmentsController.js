const investmentsService = require('../services/investmentsService');
const tokenService = require('../services/tokenService');

const investmentsController = {

    getAll: async (req, res) => {
      // #swagger.tags = ['Investimentos']
      // #swagger.description = 'Endpoint para consultar todos os ativos disponíveis' 
        const stoks = await investmentsService.getAll();
        return res.status(200).json(stoks);
    },
    getByName: async (req, res) => {
      // #swagger.tags = ['Investimentos']
      // #swagger.description = 'Endpoint para consultar os ativos por nome' 

        const { q } = req.query;
        const stok = await investmentsService.getByName(q);
        return res.status(200).json(stok);
    },
    getById: async (req, res) => {
      // #swagger.tags = ['Investimentos']
      //  #swagger.description = 'Endpoint para consultar um ativo pelo codAtivo' 

        const { id } = req.params;
        const stok = await investmentsService.getById(id);
        return res.status(200).json(stok);
    },
    buyStoks: async (req, res) => {
      // #swagger.tags = ['Investimentos']
      //  #swagger.description = 'Endpoint para comprar um ativo pelo codAtivo' 
        const data = req.body;
        const buy = await investmentsService.buyStoks(data);
        return res.status(201).json(buy);
    },
    sellStock: async (req, res) => {
      // #swagger.tags = ['Investimentos']
      //  #swagger.description = 'Endpoint para vender um ativo pelo codAtivo'
      const { authorization } = req.headers;
      const id = tokenService.getUserId(authorization);
      const { codAtivo, qtdeAtivo } = req.body;
      const data = { codCliente: id, codAtivo, qtdeAtivo };
      const sell = await investmentsService.sellStock(data);
      return res.status(201).json(sell);
    },
    getWalllet: async (req, res) => {
      // #swagger.tags = ['Investimentos']
      //  #swagger.description = 'Endpoint para retornar os ativo da carteira do usuário'
      const { authorization } = req.headers;
      const id = tokenService.getUserId(authorization);
      const wallet = await investmentsService.getWallet(id);
      res.status(200).json(wallet);
    },
};

module.exports = investmentsController;