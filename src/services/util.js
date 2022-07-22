const db = require('../database/models');
const UnauthorizedError = require('../error/UnauthorizedError');
const NotFoundError = require('../error/NotFoundError');

const util = {
    formatValue: (value) => value.replace(',', '.'),

    isvalid: (value) => {    
        const number = Number(value);
        
        if (isNaN (number) || number <= 0) {
          throw new UnauthorizedError('Valor inválido!');
        }
    },
    
    verifyStok: async (id) => { // verifica se existe a ação pelo código da ação
        const stok = await db.Stock.findByPk(id);
        if (!stok.dataValues) {
          throw new NotFoundError('Código da ação inválido!'); 
        }
        const { dataValues } = stok;
        return dataValues;
    },

    updateBalance: async (userId, balance) => { // atualiza o saldo do cliente
        const result = await db.Account.update({ balance }, { where: { userId } });
        return result;
    },

    registryOp: async ({ accountId, value, type }) => { // registra a operação, tipo um log.
        const result = await db.AccountTransactions.create({ accountId, value, type });
        return result;
    },
    updatePortfolio: async (data) => {
        // user_id cod_ativo, valor_compra, registro_id
        const result = await db.StockPortfolio.create(data);
        return result;
    },
    updateStocks: async (qtdeOferta, id) => { // na corretora
        await db.Stock.update({ qtdeOferta }, { where: { id } });
        return true;
    },
};

module.exports = util;
