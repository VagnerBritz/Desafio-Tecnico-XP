const db = require('../database/models');
const NotFoundError = require('../error/NotFoundError');
const UnauthorizedError = require('../error/UnauthorizedError');
const authServices = require('./authService');

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
  createAccount: async (data) => {
    const { email, password } = data;
    // criptografar a senha,
    const passwordHash = await authServices.encrypt(password);
    const userExist = await db.User.findOne({ where: { email } });
    if (userExist) {
      throw new UnauthorizedError('Usuário já cadastrado na plataforma');
    } // verificar se já nãoexiste este usuario

    // criar a conta/ 
    const userInfo = await db.User.create({ email, password: passwordHash, active: true });
    const { id } = userInfo.toJSON();
    // criar o registro na conta
    await db.Account.create({ userId: id, balance: 0 });
    const info = { CodCliente: id, email };
    return info;
  },
};

module.exports = userServices;