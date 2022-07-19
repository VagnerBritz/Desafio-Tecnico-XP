const db = require('../database/models');

const userServices = {

 balance: async (id) => {
    const { dataValues } = await db.Account.findByPk(id);
    let {userId, balance} = dataValues;
    balance = {CodCliente: userId, Saldo: Number(balance) };

    return balance
  },
};

module.exports = userServices;