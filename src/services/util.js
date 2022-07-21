const db = require('../database/models');
const userServices = require('./userService');

const util = {
    formatValue: (value) => value.replace(",", "."),

    isvalid: (value)  => {    
        const number = Number(value);
        
        if (isNaN (number) || number <= 0) {
            const error = new Error('Valor inválido!');
            error.name = 'UnauthorizedError';
            throw error;
        }
        return true; // precisa desse return? ... 
    },

    verifyStok: async (id) => {
        const stok = await db.Stock.findByPk(id);
        if(!stok.dataValues) {
            const error = new Error('Código da ação inválido!').name = 'NotFoundError';
            throw error; 
        }
        const { dataValues } = stok;
        return dataValues;
    },

    updateBalance: async (userId, balance) => {
        const result =  await db.Account.update({ balance }, { where: {userId} })
        return result;
    },

    registryOp: async ({accountId, value, type}) => {
        const result = await db.AccountTransactions.create({ accountId, value, type});
        return result;
    },
};

module.exports = util;


