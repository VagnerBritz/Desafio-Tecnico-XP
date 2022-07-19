const accountService = require('../services/accountService');

const accountController = {
    deposit: async (req, res) => {
        const { CodCliente , Valor } = req.body;
        const teste = await accountService.deposit(CodCliente, Valor );
        return res.status(201).json(teste);
    }, 
};

module.exports = accountController;