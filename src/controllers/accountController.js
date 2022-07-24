const accountService = require('../services/accountService');
const tokenService = require('../services/tokenService');

const accountController = {
    deposit: async (req, res) => {
        const { CodCliente, Valor } = req.body;
        const { valor } = await accountService.deposit(CodCliente, Valor);
        const message = `Depósito de ${valor} efetuado com sucesso para a conta: ${CodCliente}!`;
        
        return res.status(201).json({ message });
    },
        
    withdraw: async (req, res) => {
        const { CodCliente, Valor } = req.body;
        const { authorization } = req.headers;
        const id = tokenService.getUserId(authorization, CodCliente);
        const { valor } = await accountService.withdraw(id, Valor);
        const message = `Saque de ${valor} autorizado!`;

        return res.status(201).json({ message });
    },
};

module.exports = accountController;