const db = require('../database/models');
const NotFoundError = require('../error/NotFoundError');

const userServices = {

 getBalance: async (id) => {
    const user = await db.Account.findByPk(id);
    if (!user) {
      throw new NotFoundError('Usuário não encontrado!');
    }
      
    let { userId, balance } = user.dataValues;
    balance = { CodCliente: userId, Saldo: Number(balance) };

    return balance;
  },
};

module.exports = userServices;