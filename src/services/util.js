const Joi = require('joi');
const db = require('../database/models');
const err = require('../error');

const util = {
    formatValue: (value) => {
      if (typeof value === 'string') {
        return value.replace(',', '.');
      }
      return value;
    },
    
    isvalid: (value) => {    
        const number = Number(value);
        
        if (isNaN(number) || number <= 0) {
          throw new err.UnauthorizedError('Valor inválido!');
        }
    },
    
    verifyStok: async (id) => { // verifica se existe a ação pelo código da ação
        const stok = await db.Stock.findByPk(id);
        if (!stok.dataValues) {
          throw new err.NotFoundError('Código da ação inválido!'); 
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

    updatePortfolio: async (data) => { // atualiza carteira (ações) do cliente
      const result = await db.StockPortfolio.create(data);
      return result;
    },

    updateStocks: async (qtdeOferta, id) => { // atualiza qtde de ações na corretora
        await db.Stock.update({ qtdeOferta }, { where: { id } });
        return true;
    },
    formatBRL: (value) => { // atualiza para moeda brasileira
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      const formatted = formatter.format(value);
      return formatted;
    },

    validateLogin: (data) => { // confere os req. mínimos para abrir conta
      const schema = Joi.object({
          email: Joi.string().email().required(),
          password: Joi.string().required().min(6),       
      });
      const { error } = schema.validate(data);
      if (error) { 
          throw new err.ValidationError(error.message);
      }
  },
};

module.exports = util;
