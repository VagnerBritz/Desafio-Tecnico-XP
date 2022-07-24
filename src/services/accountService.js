const userServices = require('./userService');
const util = require('./util');
const err = require('../error');

const accountService = {

    deposit: async (CodCliente, Valor) => {     
        const valor = util.formatValue(Valor);

        util.isvalid(valor);      
        const balance = await userServices.getBalance(CodCliente); // consulta se a conta existe e o saldo.
        const newBalance = balance.Saldo + Number(valor); // calcula o novo saldo        
        
        await util.registryOp({ accountId: CodCliente, value: Valor, type: 'DEPOSIT' }); // cria o log na tabela
        await util.updateBalance(CodCliente, newBalance);

        return { valor: util.formatBRL(Valor) };
    },  

    withdraw: async (CodCliente, Valor) => {
        const valor = util.formatValue(Valor);
        util.isvalid(valor);
        const balance = await userServices.getBalance(CodCliente); // consulta se a conta existe e o saldo.
        const newBalance = balance.Saldo - Number(valor);// calcula o novo saldo
        if (newBalance < 0) {
          throw new err.UnauthorizedError('Saldo insuficiente!');
        }

        await util.registryOp({ accountId: CodCliente, value: valor, type: 'WITHDRAW' });
        await util.updateBalance(CodCliente, newBalance);
        return { valor: util.formatBRL(Valor) };
    },
};

module.exports = accountService;