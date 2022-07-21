const db = require('../database/models');
const userServices = require('../services/userService');

const accountService = {

    deposit: async (CodCliente, Valor ) => { // ver se é necessário envolver com tryCatch    

        Valor = formataValor(Valor);

        isvalid(Valor); // valida se o valor não é nulo ou < = 0;        
        const balance = await userServices.getBalance(CodCliente); // consulta se a conta existe e o saldo.
        const newBalance = balance.Saldo + Number(Valor); // calcula o novo saldo        
        
        await transaction({ accountId: CodCliente, value: Valor, type: 'DEPOSIT' }) // cria o log na tabela
        const result = await updateBalance(CodCliente, newBalance);

        return true;
    }, 

    withdraw: async (CodCliente, Valor) => {
        
        Valor = formataValor(Valor);

        isvalid(Valor);
        const balance = await userServices.getBalance(CodCliente); // consulta se a conta existe e o saldo.
        const newBalance =  balance.Saldo - Number(Valor);// calcula o novo saldo
        if(newBalance < 0 ) {
            const error = new Error('Insufficient funds!');
            error.name = 'UnauthorizedError';
            throw error;
        };
        await transaction({accountId: CodCliente, value: Valor, type: 'WITHDRAW'});
        const result = await updateBalance(CodCliente, newBalance);
        return true;
    }
};

const formataValor = (valor) => valor.replace(",", "."); // Substitui a virgula por ponto.

const isvalid = (valor)  => {    
    const number = Number(valor);
    
    if (isNaN (number) || number <= 0) {
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

const transaction = async ({accountId, value, type}) => {
    const result1 = await db.AccountTransactions.create({ accountId, value, type});
    return result1;
};

module.exports = accountService;