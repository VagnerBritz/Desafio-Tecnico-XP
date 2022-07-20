const accountService = require('../services/accountService');

const accountController = {
    deposit: async (req, res) => {
        const { CodCliente , Valor } = req.body;
        await accountService.deposit(CodCliente, Valor );
        const message = `deposit of ${Valor} successfully made to account ${CodCliente}!`;
        
        return res.status(200).json({ message });
    },
        
    withdraw: async (req, res) => {
        const { CodCliente , Valor } = req.body;
        await accountService.withdraw(CodCliente, Valor);
        const message = `Withdrawal of ${Valor} authorized!`;

        return res.status(200).json({message});
    },
};

module.exports = accountController;