const accountService = require('../services/accountService');

const accountController = {
    deposit: async (req, res) => {
        const { CodCliente, Valor } = req.body;
        await accountService.deposit(CodCliente, Valor);
        const message = `Depósito de ${Valor} efetuado com sucesso para a conta: ${CodCliente}!`;
        
        return res.status(201).json({ message });
    },
        
    withdraw: async (req, res) => {
        const { CodCliente, Valor } = req.body;
        await accountService.withdraw(CodCliente, Valor);
        const message = `Saque de ${Valor} autorizado!`;

        return res.status(201).json({ message });
    },
};

module.exports = accountController;