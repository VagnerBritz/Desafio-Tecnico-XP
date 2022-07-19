const db = require('../database/models');
const userServices = require('../services/userService');

const accountService = {
    deposit: async (CodCliente, Valor ) => { // ver se é necessário envolver com tryCatch
        
        isvalid(Valor); // valida se o valor não é nulo ou < = 0;  
        
        // consultar se a conta existe e o saldo.
        const balance = await userServices.balance(CodCliente);
        const newBalance = balance.Saldo + Number(Valor);
        
        // transaction
        const transaction = await db.AccountTransactions.create({ //cria o registro da movimentação
            accountId: CodCliente,
            value: Valor,
            type: 'DEPOSIT'
        });
       
       const result = await updateBalance(CodCliente, newBalance);
        
        // Update do saldo na tabela account
        // transaction
        return result;
    },    
};

const isvalid = (Valor)  => {
    if (!Number(Valor) > 0) {
        const error = new Error('Invalid value!');
        error.name = 'UnauthorizedError';
        throw error;
    }
    return true;
};

const updateBalance = async (userId, balance) => {
    const result =  await db.Account.update({ balance }, { where: {userId} })
    return result;
};

module.exports = accountService;