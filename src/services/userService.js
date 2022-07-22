const db = require('../database/models');
const NotFoundError = require('../error/NotFoundError');
const UnauthorizedError = require('../error/UnauthorizedError');

const userServices = {

 getBalance: async (id) => {
    const account = await db.Account.findByPk(id);
    if (!account) {
      throw new NotFoundError('Conta não encontrada!');
    }
      
    let { userId, balance } = account.dataValues;
    balance = { CodCliente: userId, Saldo: Number(balance) };

    return balance;
  },
  deleteAccount: async (id) => {
    const account = await db.Account.findOne({ where: { userId: id } });
    if (account.balance > 0) {
      throw new UnauthorizedError('A conta não está zerada.');
    }
    
    await db.User.update({ active: false }, { where: { id } });
  },
};

module.exports = userServices;