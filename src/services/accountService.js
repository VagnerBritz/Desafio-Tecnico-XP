const userServices = require('./userService');
const util = require('./util');
const UnauthorizedError = require('../error/UnauthorizedError');

const accountService = {

    deposit: async (CodCliente, Valor) => { // ver se é necessário envolver com tryCatch    
        const valor = util.formatValue(Valor);

        util.isvalid(valor); // valida se o valor não é nulo ou < = 0;        
        const balance = await userServices.getBalance(CodCliente); // consulta se a conta existe e o saldo.
        const newBalance = balance.Saldo + Number(valor); // calcula o novo saldo        
        
        await util.registryOp({ accountId: CodCliente, value: Valor, type: 'DEPOSIT' }); // cria o log na tabela
        await util.updateBalance(CodCliente, newBalance);

        return true;
    }, 

    withdraw: async (CodCliente, Valor) => {
        const valor = util.formatValue(Valor);

        util.isvalid(valor);
        const balance = await userServices.getBalance(CodCliente); // consulta se a conta existe e o saldo.
        const newBalance = balance.Saldo - Number(valor);// calcula o novo saldo
        if (newBalance < 0) {
          throw new UnauthorizedError('Saldo insuficiente!');
        }

        await util.registryOp({ accountId: CodCliente, value: valor, type: 'WITHDRAW' });
        await util.updateBalance(CodCliente, newBalance);
        return true;
    },
};

module.exports = accountService;