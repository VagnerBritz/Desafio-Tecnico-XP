const db = require('../database/models');

const userServices = {

 balance: async (id) => {
    const user = await db.Account.findByPk(id);
    if (!user) {
      const error = new Error('User not found');
      error.name = 'NotFoundError';
      throw error;
    }
      
    let {userId, balance} = user.dataValues;
    balance = {CodCliente: userId, Saldo: Number(balance) };

    return balance
  },
};

module.exports = userServices;